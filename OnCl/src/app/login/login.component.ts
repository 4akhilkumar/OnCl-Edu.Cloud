import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUserData ={
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)])
  }

  loginData={email:"",password:""}

  getMessageEmail() {
    if (this.loginUserData.email.hasError('required')) {
      return 'Enter your E - Mail address';
    }
    else if(this.loginUserData.email.hasError('email')) {
      return 'Invalid E - Mail address';
    }
  }
  getMessagePassword() {
    if (this.loginUserData.password.hasError('required')) {
      return 'Enter your password';
    }
    else if(this.loginUserData.password.hasError('minlength')) {
      return 'Use your 8 characters or more of your password';
    }
    else if(this.loginUserData.password.hasError('pattern')) {
      return 'Please enter your stronger password. which is a mix of letters, numbers, and symbols.';
    }
  }

  hide = true;
  constructor(private _auth: AuthService,
              public dialog: MatDialog,
              private _router: Router,
              private titleService:Title,
              private snackbar:MatSnackBar) { }
  
  title = 'Sign in - OnCl Account';
  ngOnInit(): void { 
    this.titleService.setTitle(this.title);
  }

  loginUser () {
    this.loginData.email=this.loginUserData.email.value;
    this.loginData.password=this.loginUserData.password.value;
    this._auth.loginUser(this.loginData)
    .subscribe(
      res => {
        this.snackbar.open('Login Successfull', 'Okay!', {
          duration: 4000,
        });
        localStorage.setItem('token', res.token)
        this._router.navigate(['/welcome'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.snackbar.open('Invalid E - Mail or Password!', 'Okay!', {
              duration: 4000,
            });
            this.loginUserData.email.reset();
            this.loginUserData.password.reset();
            this.loginData.email='';
            this.loginData.password='';
          }
        }
      }
    ) 
  }
}