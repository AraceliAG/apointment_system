import { Component } from '@angular/core';
import { AppointmentS } from '../services/appointment';
import { AppointmentM } from '../models/appointment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appointment',
  imports: [CommonModule, FormsModule, MatTableModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class Appointment {
  AppointmentModel:AppointmentM[] = [];
  dataSource = new MatTableDataSource<AppointmentM>();
  displayedColumns: string[] = ['id','date', 'active', 'numero_Empleado'];

  constructor(private appointmentService:AppointmentS){

  }

  get_appointment(){
    this.appointmentService.getAppointment().subscribe({
      next:(data) => {
        this.AppointmentModel = data;
        this.dataSource.data = data;
        console.log('fount: : ', data)
      },
      error: (err) => {
          console.error('Error', err)
        }

    });
  }

  ngOnInit(){
    this.get_appointment()
  }

}
