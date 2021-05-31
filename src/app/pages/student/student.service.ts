import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  getAllStudents() {
    console.log('getAllStudents method calling...')
    return this.httpClient.get<any[]>("http://localhost:3000/students");    
    
  }
}






