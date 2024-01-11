import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
import { TokenStorageService } from '../services/token-storage.service';
import { PopupService } from '../popup/popup.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  public firstname: String | undefined;
  public lastname: String | undefined;
  public age: String | undefined;
  dataSource: any;
  displayedColumns: string[] = ['id','name'];
  isLogged: boolean = false;
  isConnectedUser: boolean = false;
  editMod: boolean = false;


  constructor(private route: ActivatedRoute, private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private popupService: PopupService) {
    this.isLogged = this.tokenStorageService.isLogged();
      if(this.isLogged){
        this.isConnectedUser = this.tokenStorageService.getUsername() == this.route.snapshot.params['id'];
      }
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.updateContent(params['id']);
      }
    );
  }

  private updateContent(id: string) {
    const request: Observable<any> = this.http.get(environment.api + '/users/'+id, { observe: 'response' });
    request.subscribe(response =>
      {
      this.firstname = response.body.firstname,
      this.lastname = response.body.lastname,
      this.age = response.body.age
      },
      error =>
      {
        this.popupService.openPopup("Can't get user : "+ error.message,"Error "+error.status);
      });
    const requestAsso: Observable<any> = this.http.get(environment.api +'/users/'+id+'/member', { observe: 'response' });
    next : lastValueFrom(requestAsso).then(response => this.dataSource = response.body,
      error => {
        this.popupService.openPopup("Can't get associations : "+ error.message,"Error "+error.status);
      });
  }

  setEditMod(editMod: boolean) {
    this.editMod = editMod;
  }

  updateUser(firstname?: string, lastname?: string, age?: string, password?: string) {
    if(firstname == "") firstname = undefined;
    if(lastname == "") lastname = undefined;
    if(age == "") age = undefined;
    if(password == "") password = undefined;
    const request: Observable<any> = this.http.put(environment.api + '/users/'+this.route.snapshot.params['id'], { firstname, lastname, age, password, observe: 'response' });
    next : lastValueFrom(request).then(response => {
      this.updateContent(this.route.snapshot.params['id']);
      this.setEditMod(false);
    },
      error => {
        this.popupService.openPopup("Can't update user : "+ error.message,"Error "+error.status);
      });
  }




}
