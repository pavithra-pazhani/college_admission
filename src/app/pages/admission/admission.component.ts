import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {


  students: any[] = [
    {
      "admitNo": "0001",
      "department": "BCA",
      "name": "Olive Dominguez",
      "email": "olivedominguez@bleeko.com",
      "phone": "+91 (865) 400-3783",
      "address": "804 Jardine Place, Barclay, Indiana, 6419",
      
    },
    {
      "admitNo": "0002",
      "department": "B.SC cs",
      "name": "Jasmine Yang",
      "email": "jasmineyang@bleeko.com",
      "phone": "+91 (830) 466-3292",
      "address": "519 Revere Place, Sterling, Texas, 8286",
    },
    {
      "admitNo": "0003",
      "department": "BCA",
      "name": "Josie Gill",
      "email": "josiegill@bleeko.com",
      "phone": "+91 (972) 595-2572",
      "address": "331 Vanderveer Street, Kieler, Mississippi, 5367",
    },
    {
      "admitNo": "0004",
      "department": "BBA",
      "name": "Grimes Abbott",
      "email": "grimesabbott@bleeko.com",
      "phone": "+91 (814) 542-3074",
      "address": "127 Roder Avenue, Carbonville, Guam, 9454",
    },
    {
      "admitNo": "0005",
      "department": "BCA",
      "name": "Deidre Guerra",
      "email": "deidreguerra@bleeko.com",
      "phone": "+91 (801) 566-2621",
      "address": "232 Harway Avenue, Unionville, Nevada, 9943",
    },
    {
      "admitNo": "0006",
      "department": "BCA",
      "name": "Russo Fitzgerald",
      "email": "russofitzgerald@bleeko.com",
      "phone": "+91 (801) 491-2544",
      "address": "470 Cornelia Street, Venice, New Jersey, 9048",
    },
    {
      "admitNo": "0007",
      "department": "BBA",
      "name": "Carney Russell",
      "email": "carneyrussell@bleeko.com",
      "phone": "+91 (835) 593-2637",
      "address": "771 Virginia Place, Murillo, South Dakota, 9986",
    },
    {
      "admitNo": "0008",
      "department": "BCA",
      "name": "Janine Massey",
      "email": "janinemassey@bleeko.com",
      "phone": "+91 (813) 585-3216",
      "address": "302 Delmonico Place, Efland, Illinois, 1707",
    },
    {
      "admitNo": "0009",
      "department": "B.SC cs",
      "name": "Faulkner Hurst",
      "email": "faulknerhurst@bleeko.com",
      "phone": "+91 (866) 423-2277",
      "address": "376 Rose Street, Fontanelle, Michigan, 1405",
    },
    {
      "admitNo": "0010",
      "department": "B.SC cs",
      "name": "Ruth Middleton",
      "email": "ruthmiddleton@bleeko.com",
      "phone": "+91 (884) 482-3228",
      "address": "331 Hyman Court, Vowinckel, Oregon, 6738",
    },
    {
      "admitNo": "0011",
      "department": "BBA",
      "name": "Newton Becker",
      "email": "newtonbecker@bleeko.com",
      "phone": "+91 (974) 503-3833",
      "address": "917 Pineapple Street, Morningside, Virgin Islands, 3136",
    },
    {
      "admitNo": "0012",
      "department": "BCA",
      "name": "Rhoda Gomez",
      "email": "rhodagomez@bleeko.com",
      "phone": "+91 (970) 460-3678",
      "address": "937 Madeline Court, Edneyville, New Hampshire, 7117",
    },
    {
      "admitNo": "0013",
      "department": "BCA",
      "name": "Sears Burgess",
      "email": "searsburgess@bleeko.com",
      "phone": "+91 (900) 439-2966",
      "address": "954 Wythe Avenue, Ribera, Georgia, 7514",
    },
    {
      "amitNo": "0014",
      "department": "B.SC cs",
      "name": "Barry Barrera",
      "email": "barrybarrera@bleeko.com",
      "phone": "+91 (863) 452-3811",
      "address": "593 Coventry Road, Golconda, South Carolina, 3161",
    },
    {
      "admitNo": "0015",
      "department": "BBA",
      "name": "Cain Jennings",
      "email": "cainjennings@bleeko.com",
      "phone": "+91 (828) 406-2461",
      "address": "972 Fleet Walk, Gila, Florida, 6522",
    },
    {
      "admitNo": "0016",
      "department": "BBA",
      "name": "Hoffman Love",
      "email": "hoffmanlove@bleeko.com",
      "phone": "+91 (878) 584-2492",
      "address": "266 Bergen Avenue, Neibert, Palau, 1244",
    },
    {
      "admitNo": "0017",
      "department": "BCA",
      "name": "Jacqueline Strickland",
      "email": "jacquelinestrickland@bleeko.com",
      "phone": "+91 (876) 407-3826",
      "address": "426 Winthrop Street, Falconaire, Vermont, 5124",
    },
    {
      "admitNo": "0018",
      "department": "B.SC cs",
      "name": "Stacey Miles",
      "email": "staceymiles@bleeko.com",
      "phone": "+91 (840) 525-2353",
      "address": "631 Lloyd Street, Allentown, Marshall Islands, 5381",
    },
    {
      "admitNo": "0019",
      "department": "BBA",
      "name": "Melanie Blake",
      "email": "melanieblake@bleeko.com",
      "phone": "+91 (839) 558-2502",
      "address": "284 Barbey Street, Roosevelt, Iowa, 2510",
    },
    {
      "admitNo": "0020",
      "department": "BBA",
      "name": "Gwen Ellis",
      "email": "gwenellis@bleeko.com",
      "phone": "+91 (943) 588-3052",
      "address": "552 Sutton Street, Riegelwood, Minnesota, 1385",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
