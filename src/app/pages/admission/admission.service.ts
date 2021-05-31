import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  private baseUrl = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  getAlladmissions() {
    console.log('getAlladmissions method calling...')
    return this.httpClient.get<any[]>("http://localhost:3000/admissions");    
    
    
  }
}
