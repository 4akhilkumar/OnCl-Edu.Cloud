import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  displayedColumns=['Course Name','LTPS','Topics Covered','D&TOC', 'URL','Faculty Name','Faculty E - Mail','Platform', 'Last Updated','Edit','Delete','View'];
  sessions=[]
  length
  List=[]
  coname:String;
  title = 'Sessions Info. - Table View | OnCl - Edu. Cloud';
  constructor(private sessionsService:SessionsService, private router:Router, private snackBar: MatSnackBar, private authService:AuthService, private titleService:Title) { 
    this.fetchRecords();
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.fetchRecords();
  }

  fetchRecords(){
    this.authService.getUserId().subscribe(
      (res)=>{
        this.sessionsService.getRecords(res).subscribe((data:any[])=>{
          this.List=data;
          this.sessions=this.List;
          this.length=this.sessions.length
          console.log(this.List)
        });
      });
  }
  delete(id){
    console.log(id)
    this.sessionsService.deleteRecord(id).subscribe(() => {
      this.snackBar.open('session Deleted !!', 'OK', {
        duration: 3000,
      });
      this.fetchRecords();
    });
  }
  edit(id){
    this.router.navigate([`edit/${id}`]);
  }
  view(id){
    this.router.navigate([`view/${id}`]);
  }

  Search(){
    if(this.coname != ""){
      this.sessions = this.List.filter(res=>{
        return res.coursename.toLocaleLowerCase().match(this.coname.toLocaleLowerCase());
      });
      this.length=this.sessions.length;
    }
    else if(this.coname == ""){
     this.ngOnInit();
    }
  }
}