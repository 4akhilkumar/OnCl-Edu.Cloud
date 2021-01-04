import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _authService: AuthService,
              private _router: Router,
              private snackbar:MatSnackBar) { }
  
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this._router.navigate(['/login'])
      this.snackbar.open('Please Login','Okay!',{
        duration: 2800,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return false
    }
  }
  
}
