import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  searchname:any="";  
  info=[
    {admission:101,name:'aaa',dep:'cs'},
    {admission:102,name:'bbb',dep:'bca'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
