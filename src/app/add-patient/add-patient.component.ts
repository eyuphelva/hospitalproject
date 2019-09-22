import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import hospitalData from '../../assets/json/data.json';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  angForm: FormGroup
  patients:any;
  constructor(private fb: FormBuilder, public router: Router) { 
    this.createForm();
    this.patients = hospitalData.patients;
  }
  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      insuranceNo:[''],
      phoneNumber: [''],
      address: ['']
    });
  }
  onClickSubmit(formData) {
    this.patients.push(formData);
    this.router.navigate(['/patients']);
 }
}
