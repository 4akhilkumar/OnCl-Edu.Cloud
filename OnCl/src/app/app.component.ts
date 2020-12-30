import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnCl';
  constructor(public _authService: AuthService,
              private _router:Router,
              private titleService:Title){
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  logout(){
    this._authService.logoutUser();
    this._router.navigate(['/login']);
  }
}
