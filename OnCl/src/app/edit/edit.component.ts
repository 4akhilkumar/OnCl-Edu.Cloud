import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  form={userid:null,coursename:null,sessiontype:null,topicscovered:null,doc:null,url:null,facultyname:null,facultyemail:null,platform:null}
  constructor(private authService:AuthService,private _router:Router,private sessionsService:SessionsService,private router:ActivatedRoute,private snackbar:MatSnackBar, private titleService:Title ) { }

  title = 'Edit Session Info. | OnCl - Edu. Cloud';

  courses: string[] = [
    'Enterprise Prog.', 'Data Science', 
    'Mathematical Prog. II', 'Comp. Net. & Security', 
    'TS - PFSD', 'TS - Compe. Coding', 'Aptitude Builder I'
  ];

  sessiontype: string[] = [
    'Lecture', 'Tutorial', 'Skilling', 'Practical'
  ];

  Platform: string[] = [
    'Microsoft Teams', 'Cisco Webex', 'Google Meet', 'Zoom'
  ];

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

  _id

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.authService.getUserId().subscribe(
      (res)=>{
        this.form.userid=res;
        this.router.params.subscribe((params)=>{
          this._id=params.id;
          this.sessionsService.getRecordById(this._id).subscribe((data:any)=>{
            this.formData.coursename.setValue(data.coursename);
            this.formData.sessiontype.setValue(data.sessiontype);
            this.formData.topicscovered.setValue(data.topicscovered);
            this.formData.url.setValue(data.url);
            this.formData.doc.setValue(data.doc);
            this.formData.facultyname.setValue(data.facultyname);
            this.formData.facultyemail.setValue(data.facultyemail);
            this.formData.platform.setValue(data.platform);
          })
        });
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
    this.sessionsService.updateRecord(this._id,this.form).subscribe(() => {
      this.snackbar.open('Session Updated !!', 'OK', {
        duration: 3000,
      });
    });
    this._router.navigate(['/view']);
  }
}
