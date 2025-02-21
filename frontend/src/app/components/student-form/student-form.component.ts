import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from '../student-list/student-list.component';
import { SearchListComponent } from '../search-list/search-list.component';

@Component({
  selector: 'app-student-form',
  standalone:true,
  templateUrl: './student-form.component.html',
  imports:[FormsModule,CommonModule,StudentListComponent,SearchListComponent]
})
export class StudentFormComponent {
  student: Student = { studentId: '', name: '', phone: '', email: '', department: '', favoriteSubjects: [] as string[]};

  constructor(private studentService: StudentService) {}
  prec:number=0;
  subjects = ["Physics", "Chemistry", "Mathematics", "Hindi", "Botany", "Biology", "Social", "English", "Computer Science"];

  showStudents: boolean = false; // Initially hidden

  toggleStudentList() {
    this.showStudents = !this.showStudents;
  }
  // ✅ Function to handle multi-select toggle
  toggleSubject(subject: string) {
    const index = this.student.favoriteSubjects.indexOf(subject);
    if (index === -1) {
      this.student.favoriteSubjects.push(subject); // Add if not present
    } else {
      this.student.favoriteSubjects.splice(index, 1); // Remove if already present
    }
  }
  async addStudent() {
    console.log("Submitting:", this.student); // ✅ Debug log
    const res=await this.studentService.addStudent(this.student,this.prec);
    if(!res){
    alert('Student Added!');}
  }

}
