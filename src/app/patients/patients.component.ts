import { Component, OnInit } from '@angular/core';
import hospitalData from '../../assets/json/data.json'

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any;
  constructor() {
    this.patients = hospitalData.patients;
  }

  ngOnInit() { }
  deletePatient(i: any){
    this.patients.splice(i,1);

}
}
