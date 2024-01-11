import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';
import { environment } from '../environments/environment';
import { PopupService } from '../popup/popup.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
    dataSource: any = [];

    searchValue: string = '';
    fullUserList: any = [];
    searchOptions: string[] = ['_id','pseudo','pfp','inscription','mail'];
    searchParam: string = '_id';

    constructor(
      private api: ApiHelperService,
      private http: HttpClient,
      private popupService: PopupService,
  ) {}

  ngOnInit(): void {
    this.updateDataSource();
  }

  updateDataSource(): void {
    const request: Observable<any> = this.http.get(environment.api + '/users', { observe: 'response' });
    next : lastValueFrom(request).then(response => {
      this.fullUserList = response.body;
      this.dataSource = this.fullUserList;
    },
      error => {
        this.popupService.openPopup("Can't get users : "+ error.message,"Error "+error.status);
      });
  }


  add(): void {
    const pseudo: string = (document.getElementById('pseudo') as HTMLInputElement).value;
    const mail: string = (document.getElementById('mail') as HTMLInputElement).value;
    //current date (format : YYYY-MM-DD)
    const inscription: string = new Date().toISOString().slice(0,10);
    //generate a random password
    const password: string = Math.random().toString(30).slice(-8);

    if(pseudo == '' || mail == ''){
      this.popupService.openPopup("Please fill all fields");
      return;
    }

    try {
      this.api.post({endpoint: '/users', data: { pseudo, mail, inscription, password }}).then(response => {},
        error => this.popupService.openPopup("Can't add user : "+ error.message,"Error "+error.status))
        .finally(() => {
          //update the list (we can't just simulate the update because we need the generated id)
          this.updateDataSource();
          this.popupService.openPopup("User added with temporary password ( please change it later ) : " + password);
        });
    } catch (error) {
      console.log(error);
    }
  }

  delete(id: string): void{
    this.api.delete({endpoint: '/users/'+id}).then(response => {},
      error => this.popupService.openPopup("Can't delete user : "+ error.message,"Error "+error.status))
      .finally(() => {
        //update the list (simulate the update to avoid a new request)
        this.fullUserList = this.fullUserList.filter((user: any) => user._id != id);
        this.dataSource = this.fullUserList;
      });
  }

  updateSearch(): void{
    //filter the list
    if(this.searchValue != ''){
      this.dataSource = this.fullUserList.filter((user: any) => {
        return user[this.searchParam].toString().toLowerCase().includes(this.searchValue.toLowerCase());
      });
    } else {
      this.dataSource = this.fullUserList;
    }
  }

  setSearchParam(param: string): void{
    this.searchParam = param;
    this.updateSearch();
  }
}
