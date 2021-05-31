import { Component, OnInit } from '@angular/core';
import { AdmissionService } from './admission.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {


  admissions: any[] ;

  constructor(public admissionService: AdmissionService) { }

  ngOnInit(): void {
    console.log("ngOnInit calling...")
    this.admissionService.getAlladmissions()
    .subscribe((data: any[]) => {
      console.log("response from api == admission data ===", data);
      this.admissions = data;
    });
    
  }

}
