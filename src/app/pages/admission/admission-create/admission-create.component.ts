import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-admission-create',
  templateUrl: './admission-create.component.html',
  styleUrls: ['./admission-create.component.css']
})
export class AdmissionCreateComponent implements OnInit {

   constructor(private admissioncreate:AdmissionService) { }

  ngOnInit(): void {
  }
  onclick()
  {
    alert("Your Form was Successfully Updated");

  }

}
