import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-na',
  templateUrl: './na.component.html',
  styleUrls: ['./na.component.css']
})
export class NaComponent implements OnInit {

  constructor(private titleService:Title) { }

  title = 'News & Announcements | OnCl - Edu. Cloud';

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
