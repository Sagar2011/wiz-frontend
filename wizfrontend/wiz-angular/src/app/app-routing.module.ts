import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternalComponent } from './internal/internal.component';
import { AuthGuardService } from './auth.guard';


const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'students', component: DashboardComponent , canActivate: [AuthGuardService]},
  {path: 'internal', component: InternalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
