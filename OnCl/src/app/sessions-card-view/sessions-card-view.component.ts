import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionsService } from '../sessions.service';
import { AuthService } from '../auth.service';
import { FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sessions-card-view',
  templateUrl: './sessions-card-view.component.html',
  styleUrls: ['./sessions-card-view.component.css']
})
export class SessionsCardViewComponent implements OnInit {
  
  @ViewChild(MatAccordion) accordion: MatAccordion;

  myControl = new FormControl();
  title = 'Sessions Info. | OnCl - Edu. Cloud';
  
  coname:String;
  cotopic:String;
  cofaculty:String;
  codate:String;
  sessions=[];
  filterList=[];
  List;
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 10; 
  pageSizeOptions: number[] = [0,5,10];

  refresh(): void { window.location.reload(); }

  constructor(private sessionsService:SessionsService, private authService:AuthService, private titleService:Title) { 
    this.fetchRecords();
  }

  ngOnInit(): void {
    this.fetchRecords();
    this.titleService.setTitle(this.title);
  }

  fetchRecords(){
    this.authService.getUserId().subscribe((res)=>{
        this.sessionsService.getRecords(res).subscribe((data:any[])=>{
          this.List=data;
          this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
          this.sessions=this.List;
          this.length=this.sessions.length
          console.log(this.List)
        });
      });
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.List = this.sessions.slice(startIndex, endIndex);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

  OnChange(){
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    this.List = this.filterList.slice(0, 10);
    this.length = this.filterList.length;
  }

  SearchCoName(){
    if(this.coname != ""){
      this.filterList = this.sessions.filter(res=>{
        return res.coursename.toLocaleLowerCase().match(this.coname.toLocaleLowerCase());
      });
      this.OnChange();
    }
    else if(this.coname == ""){
     this.ngOnInit();
    }
  }

  SearchTopic(){
    if(this.cotopic != ""){
      this.filterList = this.sessions.filter(res=>{
        return res.topicscovered.toLocaleLowerCase().match(this.cotopic.toLocaleLowerCase());
      });
      this.OnChange();
    }
    else if(this.cotopic == ""){
     this.ngOnInit();
    }
  }

  SearchFaculty(){
    if(this.cofaculty != ""){
      this.filterList = this.sessions.filter(res=>{
        return res.facultyname.toLocaleLowerCase().match(this.cofaculty.toLocaleLowerCase());
      });
      this.OnChange();
    }
    else if(this.cofaculty == ""){
     this.ngOnInit();
    }
  }

  SearchDate(){
    if(this.codate != ""){
      this.filterList = this.sessions.filter(res=>{
        return res.doc.toLocaleLowerCase().match(this.codate.toLocaleLowerCase());
      });
      this.OnChange();
    }
    else if(this.codate == ""){
     this.ngOnInit();
    }
  }

}
