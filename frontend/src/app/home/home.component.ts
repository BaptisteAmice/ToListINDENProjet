import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';
import { PopupService } from '../popup/popup.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  dataSource: any = [];

  searchValue: string = '';
  fullTitleList: any = [];
  searchOptions: string[] = ['_id','title'];
  searchParam: string = 'title';

  constructor(
      private api: ApiHelperService,
      private http: HttpClient,
      private popupService: PopupService,
  ) {}

  ngOnInit(): void {
    this.updateDataSource();
  }

  updateDataSource(): void {
    const request: Observable<any> = this.http.get(environment.api + '/titles', { observe: 'response' });
    next : lastValueFrom(request).then(response => {
      this.fullTitleList = response.body;
      this.dataSource = this.fullTitleList;
    },
      error => {
        this.popupService.openPopup("Can't get titles : "+ error.message,"Error "+error.status);
      });
  }


  add(): void {
    /*
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
    }*/
  }

  delete(id: string): void{
    this.api.delete({endpoint: '/titles/'+id}).then(response => {},
      error => this.popupService.openPopup("Can't delete title : "+ error.message,"Error "+error.status))
      .finally(() => {
        //update the list (simulate the update to avoid a new request)
        this.fullTitleList = this.fullTitleList.filter((title: any) => title._id != id);
        this.dataSource = this.fullTitleList;
      });
  }

  updateSearch(): void{
    //filter the list
    if(this.searchValue != ''){
      this.dataSource = this.fullTitleList.filter((title: any) => {
        return title[this.searchParam].toString().toLowerCase().includes(this.searchValue.toLowerCase());
      });
    } else {
      this.dataSource = this.fullTitleList;
    }
  }

  setSearchParam(param: string): void{
    this.searchParam = param;
    this.updateSearch();
  }

}
