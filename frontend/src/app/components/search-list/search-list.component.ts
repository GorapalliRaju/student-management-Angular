import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
@Component({
  selector: 'app-search-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent {
  searchQuery: string = '';
  students: Student[] = [];
  hello:Student[]=[];
  constructor(private studentService: StudentService) {}

  async searchStudent() {
    console.log('Searching for:', this.searchQuery);
    // Add API call or filter logic here
    this.students=await this.studentService.getStudents();
    this.hello = this.students.filter((item) => {
      // Ensure both studentId and searchQuery are compared as strings
      return item.studentId.toString() === this.searchQuery;
    });
   console.log(this.hello)
    
  }
}
