import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide=true;
  registerUserData = { name: "", email: "", password: "" }
  
  registerData={
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  }
 
  getMessageName(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 3';
    }
  }
  getMessageEmail() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }
  getMessagePassword(){
    if (this.registerData.password.hasError('required')) {
      return 'Password is required';
    }
    else if(this.registerData.password.hasError('minlength')){
      return 'Password must be a minimum length of 8 and should contain Upper & Lower Cases with Characters';
    }
  }

  constructor(private _auth: AuthService,
              public dialog: MatDialog, 
              private _router: Router,
              private snackbar:MatSnackBar) { }

  ngOnInit(): void { 
  }

  registerUser() {
    this.registerUserData.email=this.registerData.email.value;
    this.registerUserData.name=this.registerData.name.value;
    this.registerUserData.password=this.registerData.password.value;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.snackbar.open('You have Registered Successfully', 'Okay!', {
          duration: 4000,
        });
        localStorage.setItem('token', res.token)
        this._router.navigate(['/welcome'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 409) {
            this.snackbar.open('E - Mail Already Registered', 'Okay!', {
              duration: 4000,
            });
            this.registerData.email.reset();
            this.registerData.name.reset();
            this.registerData.password.reset();
            this.registerUserData.email="";
            this.registerUserData.name="";
            this.registerUserData.password="";
          }
        }
      }
    )      
  }
}