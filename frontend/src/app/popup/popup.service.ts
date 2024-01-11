import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopup(message: string, title: string = '') {
    this.dialog.open(PopupComponent, {
      data: { message, title },
    });
  }
}
