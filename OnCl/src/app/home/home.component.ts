import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService:Title
  ) { }

  title = 'OnCl - Edu. Cloud';

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
