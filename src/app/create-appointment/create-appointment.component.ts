import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import hospitalData from '../../assets/json/data.json';
import { Router, ActivatedRoute } from "@angular/router";

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
  selectedAppointment: any;
  constructor(private fb: FormBuilder, public router: Router,private route: ActivatedRoute) { 
    this.createForm();
    this.appointments = hospitalData.appointments;
    this.doctors = hospitalData.doctors;
    this.patients = hospitalData.patients;
    this.selectedAppointment = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.selectedAppointment) {
      this.selectedAppointment = this.doctors.find(field => field.id === this.selectedAppointment);
   
      this.createForm(this.selectedAppointment);

    }else {
      this.createForm();
    }
  }

  ngOnInit() {
  }
  // createForm() {
  //   this.angForm = this.fb.group({
  //     doctorName: [''],
  //     patientName: [''],
  //     appoinmentDate: [''],
     
  //   });
  createForm(selectedAppointment?:any) {
    this.angForm = this.fb.group({
      doctorName: [selectedAppointment ? selectedAppointment.doctorName : ''],
      patientName: [selectedAppointment ? selectedAppointment.patientName : ''],
      appoinmentDate: [selectedAppointment ? selectedAppointment.appoinmentDate : ''],
      
    });
  }
  onClickSubmit(formData) {
    if(this.selectedAppointment){
      this.selectedAppointment.firstName=formData.doctorName;
      this.selectedAppointment.lastName=formData.patientName;
      this.selectedAppointment.phoneNumber=formData.appoinmentDate;
      

    }else{
      this.appointments.push(formData);
    }
    this.router.navigate(['/appointments']);
 }
}
