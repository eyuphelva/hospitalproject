import { Component, OnInit } from '@angular/core';
import hospitalData from '../../assets/json/data.json';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: any;
  constructor() {
    this.appointments = hospitalData.appointments;
  }

  ngOnInit() { }
  deleteAppointment(i: any) {
    this.appointments.splice(i, 1);

  }
}