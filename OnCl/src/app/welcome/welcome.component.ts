import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private titleService:Title
  ) { }

  title = 'OnCl - Edu. Cloud';

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
