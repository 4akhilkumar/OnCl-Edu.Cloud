import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent }from './home/home.component';
import { SessionComponent } from './session/session.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ViewSessionComponent } from './view-session/view-session.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SessionsCardViewComponent } from './sessions-card-view/sessions-card-view.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { TimetableComponent } from './timetable/timetable.component';
import { EdittimetableComponent } from './edittimetable/edittimetable.component';
import { TimetableTableViewComponent } from './timetable-table-view/timetable-table-view.component';
import { ProfileComponent } from './profile/profile.component';
import { NaComponent } from './na/na.component';
import { TestingComponent } from './testing/testing.component';
import { Testing2Component } from './testing2/testing2.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'testing',component:TestingComponent},
  {path:'testing2',component:Testing2Component},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'sessions',component:SessionComponent,canActivate: [AuthGuard]},
  {path:'sessions-table-view',component:ViewComponent,canActivate: [AuthGuard]},
  {path:'sessions-card-view',component:SessionsCardViewComponent,canActivate: [AuthGuard]},
  {path:'edit/:id',component:EditComponent,canActivate: [AuthGuard]},
  {path:'view/:id',component:ViewSessionComponent,canActivate: [AuthGuard]},
  {path:'deleteaccount',component:DeleteaccountComponent,canActivate: [AuthGuard]},
  {path:'timetable',component:TimetableComponent,canActivate: [AuthGuard]},
  {path:'timetable-table-view',component:TimetableTableViewComponent,canActivate: [AuthGuard]},
  {path:'edit-timetable/:id',component:EdittimetableComponent,canActivate: [AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'na',component:NaComponent,canActivate: [AuthGuard]},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
