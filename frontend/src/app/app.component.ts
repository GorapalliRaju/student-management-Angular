import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Required for ngModel in StudentFormComponent
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Required for 'imports' to work
  imports: [CommonModule, FormsModule, StudentListComponent, StudentFormComponent,SearchListComponent,RegisterComponent,LoginComponent,RouterOutlet],  // ✅ Fixed missing imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // ✅ Corrected property name
})
export class AppComponent {
  title = 'frontend';
    showStudents: boolean = false; // Initially hidden

  toggleStudentList() {
    this.showStudents = !this.showStudents;
  }

  isLoggedIn() {
    return !!localStorage.getItem('token'); // Check login status
  }

}
