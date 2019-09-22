import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import hospitalData from '../../assets/json/data.json';
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  angForm: FormGroup
  doctors:any;
  constructor(private fb: FormBuilder, public router: Router) { 
    this.createForm();
    this.doctors = hospitalData.doctors;
  }

  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      address: ['']
    });
  }
  onClickSubmit(formData) {
    this.doctors.push(formData);
    this.router.navigate(['/doctors']);
 }

}
