import { Routes } from '@angular/router';
import { Users } from './users/users';
import { Login } from './login/login';

export const routes: Routes = [
    {path:'', component:Login},
    {path:'users', component:Users}
];
