import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentM } from '../models/appointment';
import Env from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentS {
  constructor (private http:HttpClient){

  }

  getAppointment (): Observable<AppointmentM[]>{
    return this.http.get<AppointmentM[]>(`${Env.API}api/Appointment/GetAppointment`);
  }
  
}
