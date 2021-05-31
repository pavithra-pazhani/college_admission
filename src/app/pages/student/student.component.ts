import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any[];
 constructor(public studentservice: StudentService) { }

  ngOnInit(): void {
    console.log("ngOnInit calling...")
    this.studentservice.getAllStudents()
    .subscribe((data: any[]) => {
      console.log("response from api == students data ===", data);
      this.students = data;
    });
    
  }

}