import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare const methodname: any; //We use this to use any methods that we declared in custome.js file

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }

  title = 'My Profile - My Resume | OnCl - Edu. Cloud';

  constructor(private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
