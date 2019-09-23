import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import hospitalData from '../../assets/json/data.json';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  angForm: FormGroup
  patients:any;
  selectedPatinet: any;
  constructor(private fb: FormBuilder, public router: Router,private route: ActivatedRoute) { 
    this.createForm();
    this.patients = hospitalData.patients;
    this.selectedPatinet = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.selectedPatinet);
    if (this.selectedPatinet) {
      this.selectedPatinet = this.patients.find(field => field.id === this.selectedPatinet);
   
      this.createForm(this.selectedPatinet);

    }else {
      this.createForm();
    }
    
  }
  ngOnInit() {
  }


  createForm(selectedPatinet?:any) {
    this.angForm = this.fb.group({
      firstName: [selectedPatinet ? selectedPatinet.firstName : ''],
      lastName: [selectedPatinet ? selectedPatinet.lastName : ''],
      insuranceNo: [selectedPatinet ? selectedPatinet.insuranceNo : ''],
      phoneNumber: [selectedPatinet ? selectedPatinet.phoneNumber : ''],
      address: [selectedPatinet ? selectedPatinet.address : '']
    });
  }
  onClickSubmit(formData: any) {

    if(this.selectedPatinet){
      this.selectedPatinet.firstName=formData.firstName;
      this.selectedPatinet.lastName=formData.lastName;
      this.selectedPatinet.lastName=formData.phoneNumber;
      this.selectedPatinet.lastName=formData.insuranceNo;
      this.selectedPatinet.address=formData.address;

    }else{
      this.patients.push(formData);
    }
  
    this.router.navigate(['/patients']);

  }
  
}
// onClickSubmit(formData) {
//   this.patients.push(formData);
//   this.router.navigate(['/patients']);
// }


  // createForm() {
  //   this.angForm = this.fb.group({
  //     firstName: [''],
  //     lastName: [''],
  //     insuranceNo:[''],
  //     phoneNumber: [''],
  //     address: ['']
  //   });

