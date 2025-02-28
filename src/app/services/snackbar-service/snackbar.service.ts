import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private _snackBar = inject(MatSnackBar);

  constructor() { }

  openSnackBar(message: string = 'Message', action: string = 'Close', duration: number = 2000) {
    this._snackBar.open(message, action, {
      duration: duration,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
