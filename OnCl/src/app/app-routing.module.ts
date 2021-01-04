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
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {path:'testing',component:TestingComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'sessions',component:SessionComponent},
  {path:'sessions-table-view',component:ViewComponent},
  {path:'sessions-card-view',component:SessionsCardViewComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'view/:id',component:ViewSessionComponent},
  {path:'deleteaccount',component:DeleteaccountComponent},
  {path:'',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
