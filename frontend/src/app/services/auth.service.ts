import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import axios from 'axios';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}


  async register(user: User) {
    try {
      const res = await axios.post(this.authUrl, user);
      console.log("Registration successful:", res.data); // ✅ Log the response
      return res.data; // ✅ Return the response
    } catch (error) {
      console.error("Registration Error:"); // ✅ Log detailed error
      throw error; // ✅ Rethrow the error to handle it elsewhere
    }
  }
  

  async login(user:User){
     try{
      const res = await axios.post(`${this.authUrl}/login`, user);
      console.log("login successfull");
      return res.data;
     }
     catch(error){
        throw error;
     }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
