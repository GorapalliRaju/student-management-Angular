import { Injectable } from '@angular/core';
import axios from 'axios';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5000/api/students';

  async getStudents(): Promise<Student[]> {
    const res = await axios.get(this.apiUrl);
    return res.data;
  }

  async addStudent(student: Student,prec:number) {
    try {
      // Fetch all students to check for duplicates
      const response = await axios.get(this.apiUrl);
      const users = response.data;  // The students should be in the `data` field
  
      // Check if any student has the same studentId
      const existingStudent = users.find((existing: Student) => existing.studentId === student.studentId);
  
      if (existingStudent) {
        // If student exists, alert the user and stop the process
        alert('Student with this ID already exists!');
        prec=1;
        return prec;  // Stop further execution
      }
  
      // Proceed with adding the student if not found
      else{
      console.log("Adding student:", student);
      const res = await axios.post(this.apiUrl, student);
      return prec;  // Return the added student
      }
    } catch (error) {
      console.error('Error adding student:', error);
      throw new Error('An error occurred while adding the student.');
    }
  }
  

  async updateStudent(id: string, student: Student): Promise<Student> {
    const res = await axios.put(`${this.apiUrl}/${id}`, student);
    return res.data;
  }

  async deleteStudent(id: string): Promise<void> {
    await axios.delete(`${this.apiUrl}/${id}`);
  }
}
