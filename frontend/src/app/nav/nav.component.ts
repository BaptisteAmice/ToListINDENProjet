import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent implements OnInit {

  isLogged: boolean = false;
  connectedUserId: string = "";

  constructor(
    private tokenStorageService: TokenStorageService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.isLogged = this.tokenStorageService.isLogged();
      if(this.isLogged){
        this.connectedUserId = this.tokenStorageService.getUsername();
      }
  }


  logout(): void {
    this.tokenStorageService.clear();
    this.route.navigateByUrl("/login");
    //reload all components
    location.reload();
  }


}
