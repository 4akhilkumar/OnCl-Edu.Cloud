import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router'
import { FormControl, Validators } from '@angular/forms';
import { SessionsService } from '../sessions.service';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  title = 'Add Session(s) Info. | OnCl - Edu. Cloud';
  courses: string[] = [
    'Enterprise Programming', 'Data Science', 
    'Mathematical Programming II', 'Computer Networks & Security', 
    'Technical Skilling - PFSD', 'Technical Skilling - Compe. Coding', 'Aptitude Builder I'
  ];

  sessiontype: string[] = [
    'Lecture', 'Tutorial', 'Skilling', 'Practical'
  ];

  Platform: string[] = [
    'Microsoft Teams', 'Cisco Webex', 'Google Meet', 'Zoom'
  ];

  form={userid:null,coursename:null,sessiontype:null,topicscovered:null,doc:null,url:null,facultyname:null,facultyemail:null,platform:null}
  constructor(private authService:AuthService, private router:Router, private sessionsService:SessionsService, private snackbar:MatSnackBar, private titleService:Title) { }

  formData={
    coursename:new FormControl('',[Validators.required]),
    sessiontype:new FormControl('',[Validators.required,Validators.minLength(2)]),
    topicscovered:new FormControl('',[Validators.required,Validators.minLength(2)]),
    doc:new FormControl('',[Validators.required]),
    url:new FormControl('',[Validators.required]),
    facultyname:new FormControl('',[Validators.required]),
    facultyemail:new FormControl('',[Validators.required,Validators.email]),
    platform:new FormControl('',[Validators.required]),
  }

  getErrorCourseName() {
    if (this.formData.coursename.hasError('required')) {
      return 'Enter Course Name';
    }
    else if(this.formData.coursename.hasError('minlength')){
      return 'Are you sure you entered the course name correctly?';
    }
  }

  getErrorSessionType() {
    if (this.formData.sessiontype.hasError('required')) {
      return 'Enter Session Type i.e., LTPS';
    }
  }

  getErrorTopics(){
    if (this.formData.topicscovered.hasError('required')) {
      return 'Enter Topics Covered';
    }
    else if(this.formData.topicscovered.hasError('minlength')){
      return 'Are you sure you entered the topics correctly?';
    }
  }

  getErrorURL(){
    if (this.formData.url.hasError('required')) {
      return 'Enter the Sharable Link';
    }
  }

  getErrorDOC() {
    if (this.formData.doc.hasError('required')) {
      return 'Enter Date & Time of Conduction';
    }
  }

  getErrorFacultyName(){
    if (this.formData.facultyname.hasError('required')) {
      return 'Enter Faculty Name';
    }
    else if(this.formData.facultyname.hasError('minlength')) {
      return 'Are you sure you entered faculty name correctly?';
    }
  }

  getErrorFacultyEMail(){
    if (this.formData.facultyemail.hasError('required')) {
      return 'Faculty E - Mail is required';
    }
    else if(this.formData.facultyemail.hasError('email')){
      return 'Faculty E - Mail must be a valid email Address';
    }
  }

  getErrorPlatform(){
    if (this.formData.platform.hasError('required')) {
      return 'Enter Platform Name';
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
    this.form.coursename=this.formData.coursename.value;
    this.form.sessiontype=this.formData.sessiontype.value;
    this.form.topicscovered=this.formData.topicscovered.value;
    this.form.url=this.formData.url.value;
    this.form.doc=this.formData.doc.value;
    this.form.facultyname=this.formData.facultyname.value;
    this.form.facultyemail=this.formData.facultyemail.value;
    this.form.platform=this.formData.platform.value;
    this.sessionsService.addRecord(this.form).subscribe(
      (res)=>{
        this.snackbar.open('Session Added Successfully','Okay!',{
          duration: 2800,
        })
        this.router.navigate(['/sessions-table-view'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 409) {
            this.snackbar.open('Session Already Exists', 'Okay!', {
              duration: 2800,
            });
            this.formData.coursename.reset();
            this.formData.sessiontype.reset();
            this.formData.topicscovered.reset();
            this.formData.url.reset();
            this.formData.doc.reset();
            this.formData.facultyname.reset();
            this.formData.facultyemail.reset();
            this.formData.platform.reset();
            this.form.coursename="";
            this.form.sessiontype="";
            this.form.topicscovered="";
            this.form.url="";
            this.form.doc="";
            this.form.facultyname="";
            this.form.facultyemail="";
            this.form.platform="";
          }
        }
      }
    );
  }
}