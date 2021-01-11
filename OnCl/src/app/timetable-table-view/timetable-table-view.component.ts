import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-timetable-table-view',
  templateUrl: './timetable-table-view.component.html',
  styleUrls: ['./timetable-table-view.component.css']
})
export class TimetableTableViewComponent implements OnInit {

  displayedColumns=['Day','1','2','3', '4','5','6','7', '8', '9', '10', '11', '12', '13', '14', '15', 'lastupdated','View','Edit','Delete'];
  timetable=[]
  length;
  List=[]
  day:String;
  title = 'Timetable Info. | OnCl - Edu. Cloud';
  constructor(private timetableService:TimetableService, private router:Router, private snackBar: MatSnackBar, private authService:AuthService, private titleService:Title) { 
    this.fetchRecords();
  }

  refresh(): void { window.location.reload(); }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.fetchRecords();
  }

  fetchRecords(){ 
    this.authService.getUserId().subscribe(
      (res)=>{
        this.timetableService.getRecords(res).subscribe((data:any[])=>{
          this.List=data;
          this.timetable=this.List;
          this.length=this.timetable.length
          console.log(this.List)
        });
      });
  }
  delete(id){
    console.log(id)
    this.timetableService.deleteRecord(id).subscribe(() => {
      this.snackBar.open('Timetable Deleted.', 'Okay!', {
        duration: 2800,
      });
      this.fetchRecords();
    });
  }
  edit(id){
    this.router.navigate([`edit-timetable/${id}`]);
  }
  view(id){
    this.router.navigate([`view/${id}`]);
  }

  adddata(){
    this.router.navigate([`/timetable`]);
  }

  Search(){
    if(this.day != ""){
      this.timetable = this.List.filter(res=>{
        return res.day.toLocaleLowerCase().match(this.day.toLocaleLowerCase());
      });
      this.length=this.timetable.length;
    }
    else if(this.day == ""){
     this.ngOnInit();
    }
  }
}