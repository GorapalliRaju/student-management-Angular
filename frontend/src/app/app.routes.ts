import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

export const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  {path:'login',component:LoginComponent},
  {path:'addstudent',component:StudentFormComponent},
  {
    path:'**',component:RegisterComponent
  }
 // { path: '**', redirectTo: 'students' } // Redirect unknown routes
];
export class AppRoutingModule { }