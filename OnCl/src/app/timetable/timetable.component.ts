import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router'
import { FormControl, Validators } from '@angular/forms';
import { TimetableService } from '../timetable.service';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  title = 'Add Time Table Info. | OnCl - Edu. Cloud';

  day: string[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  form={userid:null,day:null,slot1:null,slot2:null,slot3:null,slot4:null,slot5:null,slot6:null,slot7:null,slot8:null,slot9:null,slot10:null,slot11:null,slot12:null,slot13:null,slot14:null,slot15:null}
  constructor(
    private authService:AuthService, 
    private router:Router, 
    private timetableService:TimetableService, 
    private snackbar:MatSnackBar, 
    private titleService:Title) { }

  formData={
    day:new FormControl('',[Validators.required]),
    slot1:new FormControl('',[Validators.required]),
    slot2:new FormControl('',[Validators.required]),
    slot3:new FormControl('',[Validators.required]),
    slot4:new FormControl('',[Validators.required]),
    slot5:new FormControl('',[Validators.required]),
    slot6:new FormControl('',[Validators.required]),
    slot7:new FormControl('',[Validators.required]),
    slot8:new FormControl('',[Validators.required]),
    slot9:new FormControl('',[Validators.required]),
    slot10:new FormControl('',[Validators.required]),
    slot11:new FormControl('',[Validators.required]),
    slot12:new FormControl('',[Validators.required]),
    slot13:new FormControl('',[Validators.required]),
    slot14:new FormControl('',[Validators.required]),
    slot15:new FormControl('',[Validators.required]),
  }

  getErrorDay() {
    if (this.formData.day.hasError('required')) {
      return 'Enter Day of the Week';
    }
  }

  getErrorSlot1() {
    if (this.formData.slot1.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot1.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot2() {
    if (this.formData.slot2.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot2.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot3() {
    if (this.formData.slot3.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot3.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot4() {
    if (this.formData.slot4.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot4.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot5() {
    if (this.formData.slot5.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot5.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot6() {
    if (this.formData.slot6.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot6.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot7() {
    if (this.formData.slot7.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot7.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot8() {
    if (this.formData.slot8.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot8.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot9() {
    if (this.formData.slot9.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot9.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot10() {
    if (this.formData.slot10.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot10.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot11() {
    if (this.formData.slot11.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot11.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot12() {
    if (this.formData.slot12.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot12.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot13() {
    if (this.formData.slot13.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot13.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot14() {
    if (this.formData.slot14.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot14.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSlot15() {
    if (this.formData.slot15.hasError('required')) {
      return 'Enter Course Name along with LTPS';
    }
    else if(this.formData.slot15.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.authService.getUserId().subscribe(
      (res)=>{
        this.form.userid=res;
      }
    )
  }

  onSubmit(){
    this.form.day=this.formData.day.value;
    this.form.slot1=this.formData.slot1.value;
    this.form.slot2=this.formData.slot2.value;
    this.form.slot3=this.formData.slot3.value;
    this.form.slot4=this.formData.slot4.value;
    this.form.slot5=this.formData.slot5.value;
    this.form.slot6=this.formData.slot6.value;
    this.form.slot7=this.formData.slot7.value;
    this.form.slot8=this.formData.slot8.value;
    this.form.slot9=this.formData.slot9.value;
    this.form.slot10=this.formData.slot10.value;
    this.form.slot11=this.formData.slot11.value;
    this.form.slot12=this.formData.slot12.value;
    this.form.slot13=this.formData.slot13.value;
    this.form.slot14=this.formData.slot14.value;
    this.form.slot15=this.formData.slot15.value;

    this.timetableService.addRecord(this.form).subscribe(
      (res)=>{
        this.snackbar.open('Timetable Added Successfully','Okay!',{
          duration: 2800,
        })
        this.router.navigate(['/timetable-table-view'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 409) {
            this.snackbar.open('Timetable Already Exists', 'Okay!', {
              duration: 2800,
            });
            this.formData.day.reset();
            this.formData.slot1.reset();
            this.formData.slot2.reset();
            this.formData.slot3.reset();
            this.formData.slot4.reset();
            this.formData.slot5.reset();
            this.formData.slot6.reset();
            this.formData.slot7.reset();
            this.formData.slot8.reset();
            this.formData.slot9.reset();
            this.formData.slot10.reset();
            this.formData.slot11.reset();
            this.formData.slot12.reset();
            this.formData.slot13.reset();
            this.formData.slot14.reset();
            this.formData.slot15.reset();
            this.form.day="";
            this.form.slot1="";
            this.form.slot2="";
            this.form.slot3="";
            this.form.slot4="";
            this.form.slot5="";
            this.form.slot6="";
            this.form.slot7="";
            this.form.slot8="";
            this.form.slot9="";
            this.form.slot10="";
            this.form.slot11="";
            this.form.slot12="";
            this.form.slot13="";
            this.form.slot14="";
            this.form.slot15="";
          }
        }
      }
    );
  }
}