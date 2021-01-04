import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnCl - Edu. Cloud';
  constructor(public _authService: AuthService,
              private titleService:Title){
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  logout(){
    this._authService.logoutUser();
  }
}
