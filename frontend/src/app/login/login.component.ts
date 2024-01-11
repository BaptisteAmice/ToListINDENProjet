import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { catchError } from 'rxjs';
import { PopupService } from '../popup/popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false;
  error?: any;
  connectedUser: any;
  constructor(
          private api: ApiHelperService,
          private tokenStorageService: TokenStorageService,
          private popupService: PopupService,
    ) {}


    ngOnInit(): void {
      this.isLogged = this.tokenStorageService.isLogged();
      if(this.isLogged){
        let connectedUserId = this.tokenStorageService.getUsername();
        this.api.get({endpoint: '/users/'+connectedUserId}).then(response => {
          this.connectedUser = response;
        });
      }
    }


    login(): void {
      const username: string = (document.getElementById('username') as HTMLInputElement).value;
      const password: string = (document.getElementById('password') as HTMLInputElement).value;
      this.api.post({endpoint: '/auth/login', data: { username, password },})
        .then(response => {
          this.tokenStorageService.save(response.access_token, username),
          this.isLogged = this.tokenStorageService.isLogged(),
          //reload to update all components (incuding the navbar)
          location.reload()
        })
        .catch(error => {
          if(username == '' || password == ''){
            this.popupService.openPopup("Please fill all fields");
          } else {
            if(error.status < 500 && error.status >= 400){
              this.popupService.openPopup("Wrong credentials","Error "+error.status);
            } else {
              this.popupService.openPopup("Can't login : "+ error.message,"Error "+error.status);
            }
          }
        });
      }
}
