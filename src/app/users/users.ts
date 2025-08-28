import { Component, ViewEncapsulation  } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
  encapsulation:ViewEncapsulation.None
})
export class Users {

}
