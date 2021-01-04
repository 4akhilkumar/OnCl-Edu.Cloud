import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from '../sessions.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-session',
  templateUrl: './view-session.component.html',
  styleUrls: ['./view-session.component.css']
})
export class ViewSessionComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  courses: string[] = [
    'Enterprise Programming - 19CS2107S', 'Data Science - 19CS2205S', 
    'Mathematical Programming II - 19CS2204', 'Computer Networks & Security - 19CS2109', 
    'Technical Skilling - PFSD - 19TS2201S', 'Technical Skilling - Compe. Coding - 19TS2201S', 'Aptitude Builder I - 19UC2204'
  ];

  sessiontype: string[] = [
    'Lecture', 'Tutorial', 'Skilling', 'Practical'
  ];

  Platform: string[] = [
    'Microsoft Teams', 'Cisco Webex', 'Google Meet', 'Zoom'
  ];

  title = 'View Session Info. | OnCl - Edu. Cloud';
  constructor(private router: ActivatedRoute, private sessionsService:SessionsService, private titleService:Title) { }
  _id
  
  formData={
    coursename:new FormControl(''),
    sessiontype:new FormControl(''),
    topicscovered:new FormControl(''),
    doc:new FormControl(''),
    url:new FormControl(''),
    facultyname:new FormControl(''),
    facultyemail:new FormControl(''),
    platform:new FormControl(''),
  }


  ngOnInit(): void {
    this.titleService.setTitle(this.title);
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
}