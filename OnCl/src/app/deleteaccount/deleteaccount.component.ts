import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  title = 'Delete your OnCl Account';
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private _router: Router, private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.form = this.formBuilder.group({
        acceptTerms: [false, Validators.requiredTrue],
        acceptTerms2: [false, Validators.requiredTrue]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.form.invalid) {
          return;
      }
      this.auth.getUserId().subscribe((res)=> {
        this.auth.deleteaccount(res).subscribe(()=>{
          this.auth.logoutUser()
          this._router.navigate(['/home'])
        })
      })
      alert('Your OnCl Account is Successfully Deleted\n\nAnd You No longer able to access to your Deleted Account.');
  }

  onReset() {
      this.submitted = false;
      this.form.reset();
  }

}