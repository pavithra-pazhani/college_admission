import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-edit',
  templateUrl: './admission-edit.component.html',
  styleUrls: ['./admission-edit.component.css']
})
export class AdmissionEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onclick()
  {
    alert("Your Form was Successfully Edited! THANK YOU!");

  }
}
