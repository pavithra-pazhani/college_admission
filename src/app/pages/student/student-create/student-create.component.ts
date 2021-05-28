import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  userModel = new User("","","yy",'','','','','','','','','','',"");
  gen =["Male", 'Female'];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel);
  }
  submit(){
    alert('Your form is sumbitted to Kamban College');
    
  }     

}
