import { Routes } from '@angular/router';
import { Users } from './users/users';
import { Login } from './login/login';
import { Appointment } from './appointment/appointment';

export const routes: Routes = [
    {path:'', component:Login},
    {path:'users', component:Users},
    {path: 'appointment',component:Appointment }
];
