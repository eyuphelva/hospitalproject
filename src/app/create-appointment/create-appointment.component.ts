import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import hospitalData from '../../assets/json/data.json';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  angForm: FormGroup
  appointments:any;
  doctors: any;
  patients: any;
  constructor(private fb: FormBuilder, public router: Router) { 
    this.createForm();
    this.appointments = hospitalData.appointments;
    this.doctors = hospitalData.doctors;
    this.patients = hospitalData.patients;
  }

  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      doctorName: [''],
      patientName: [''],
      appoinmentDate: [''],
     
    });
  }
  onClickSubmit(formData) {
    this.appointments.push(formData);
    this.router.navigate(['/appointments']);
 }
}
