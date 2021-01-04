import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  telegram(){
    window.open("https://github.com/4akhilkumar", '_blank');
  }
  github(){
    window.open("https://github.com/4akhilkumar", '_blank');
  }

  ngOnInit(): void {
  }

}
