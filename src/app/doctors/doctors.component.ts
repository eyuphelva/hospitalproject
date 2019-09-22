import { Component, OnInit } from '@angular/core';
import hospitalData from '../../assets/json/data.json'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: any;
  constructor() {
    this.doctors = hospitalData.doctors;
    

  }

  ngOnInit() { }
  deleteDoctor(i: any) {
    this.doctors.splice(i, 1);
  }

}
