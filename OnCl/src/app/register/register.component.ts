import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide=true;
  registerUserData = { firstname: "", lastname: "", email: "", password: "" }
  
  registerData={
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  }
 
  getMessageFirstName() {
    if (this.registerData.firstname.hasError('required')) {
      return 'Enter First Name';
    }
    else if(this.registerData.firstname.hasError('minlength')) {
      return 'Are you sure you entered your name correctly?';
    }
  }
  getMessageLastName() {
    if (this.registerData.lastname.hasError('required')) {
      return 'Enter Last Name';
    }
    else if(this.registerData.lastname.hasError('minlength')) {
      return 'Are you sure you entered your name correctly?';
    }
  }
  getMessageEmail() {
    if (this.registerData.email.hasError('required')) {
      return 'Enter your E - Mail address';
    }
    else if(this.registerData.email.hasError('email')) {
      return 'Email must be a valid email Address';
    }
  }
  getMessagePassword() {
    if (this.registerData.password.hasError('required')) {
      return 'Enter a password';
    }
    else if(this.registerData.password.hasError('minlength')) {
      return 'Use 8 characters or more for your password';
    }
    else if(this.registerData.password.hasError('pattern')) {
      return 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.';
    }
  }

  constructor(private _auth: AuthService,
              public dialog: MatDialog, 
              private _router: Router,
              private titleService:Title,
              private snackbar:MatSnackBar) { }

  title = 'Create your OnCl Account';
  ngOnInit(): void { 
    this.titleService.setTitle(this.title);
  }

  registerUser() {
    this.registerUserData.email=this.registerData.email.value;
    this.registerUserData.firstname=this.registerData.firstname.value;
    this.registerUserData.lastname=this.registerData.lastname.value;
    this.registerUserData.password=this.registerData.password.value;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.snackbar.open('You have Registered Successfully', 'Okay!', {
          duration: 4000,
        });
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 409) {
            this.snackbar.open('E - Mail Already Registered', 'Okay!', {
              duration: 4000,
            });
            this.registerData.email.reset();
            this.registerData.firstname.reset();
            this.registerData.lastname.reset();
            this.registerData.password.reset();
            this.registerUserData.email="";
            this.registerUserData.firstname="";
            this.registerUserData.lastname="";
            this.registerUserData.password="";
          }
        }
      }
    )      
  }
}