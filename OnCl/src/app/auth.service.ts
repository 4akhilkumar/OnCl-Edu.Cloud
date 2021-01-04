import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url='http://localhost:4000';
  constructor(private http: HttpClient, private _router:Router,) { }

    invokeAppComponent=new EventEmitter();
    subsVar:Subscription;

    registerUser(user) {
      return this.http.post<any>(`${this.url}/user/register`, user)
    }
  
    loginUser(user) {
      return this.http.post<any>(`${this.url}/user/login`, user)
    }
  
    logoutUser() {
      localStorage.removeItem('token')
      this._router.navigate(['/login']);
    }
  
    onLogin(){
      this.invokeAppComponent.emit();
    }

    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')    
    }

    getUserId(){
      return this.http.get(`${this.url}/user/userid`,{
        params:new HttpParams().append('token',localStorage.getItem('token'))
      })
    }

    getUserName(id){
      return this.http.get(`${this.url}/user/username/${id}`)
    }

    deleteaccount(id){
      return this.http.delete<any>(`${this.url}/user/delete/${id}`)
    }
}