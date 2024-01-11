import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit, OnDestroy {
  message: string = '';
  title: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      this.message = data.message;
      this.title = data.title;
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }

}
