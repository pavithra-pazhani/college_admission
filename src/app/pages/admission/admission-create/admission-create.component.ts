import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-create',
  templateUrl: './admission-create.component.html',
  styleUrls: ['./admission-create.component.css']
})
export class AdmissionCreateComponent implements OnInit {

  searchname:any="";  
  info=[
    {reg:101,name:'aaa',dep:'cs'},
    {reg:102,name:'bbb',dep:'bca'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onclick()
  {
    alert("Your Form was Successfully Updated");
  }

}
