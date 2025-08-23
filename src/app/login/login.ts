import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
  encapsulation: ViewEncapsulation.None // ⚠ Desactiva el encapsulamiento
})
export class Login {

  onSubmit(){}

}
