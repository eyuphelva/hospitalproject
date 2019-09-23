import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import hospitalData from '../../assets/json/data.json';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  angForm: FormGroup
  doctors: any;
  selectedDoctor: any;
  constructor(private fb: FormBuilder, public router: Router, private route: ActivatedRoute) {
    this.createForm();
    this.doctors = hospitalData.doctors;
    this.selectedDoctor = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log(this.selectedDoctor);

    if (this.selectedDoctor) {
      this.selectedDoctor = this.doctors.find(field => field.id === this.selectedDoctor);
   
      this.createForm(this.selectedDoctor);

    }else {
      this.createForm();
    }
   

  }

  ngOnInit() {

  }
  createForm(selectedDoctor?:any) {
    this.angForm = this.fb.group({
      firstName: [selectedDoctor ? selectedDoctor.firstName : ''],
      lastName: [selectedDoctor ? selectedDoctor.lastName : ''],
      phoneNumber: [selectedDoctor ? selectedDoctor.phoneNumber : ''],
      address: [selectedDoctor ? selectedDoctor.address : '']
    });
    
  }
  onClickSubmit(formData: any) {

    if(this.selectedDoctor){
      this.selectedDoctor.firstName=formData.firstName;
      this.selectedDoctor.lastName=formData.lastName;
      this.selectedDoctor.phoneNumber=formData.phoneNumber;
      this.selectedDoctor.address=formData.address;

    }else{
      this.doctors.push(formData);
    }
  
    this.router.navigate(['/doctors']);

  }

}
