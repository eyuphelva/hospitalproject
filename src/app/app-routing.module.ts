import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HomeComponent } from './home/home.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component:HomeComponent },
  { path: "doctors", component: DoctorsComponent },
  { path: "patients", component: PatientsComponent },
  { path: "appointments", component: AppointmentsComponent },
  { path: "add-doctor", component: AddDoctorComponent },
  { path: "add-patient", component: AddPatientComponent },
  { path: "create-appointment", component: CreateAppointmentComponent },
  { path: "add-doctor/:id", component: AddDoctorComponent },
  { path: "add-patient/:id", component: AddPatientComponent },
  { path: "create-appointment/:id", component: CreateAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
