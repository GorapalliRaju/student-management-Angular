import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  imports:[CommonModule],
  styleUrls: ['./student-list.component.css'] // ✅ Add style if needed
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.fetchStudents(); // ✅ Calling a separate async function
  }

  async fetchStudents() {
    try {
      this.students = await this.studentService.getStudents();
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }

  async deleteStudent(id: string='') {
    try {
      await this.studentService.deleteStudent(id);
      this.students = this.students.filter(s => s._id !== id);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }
}
