import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

//** Login **/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
public formularioLogin:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private authService:AuthService
  ) {
    this.formularioLogin = this.formBuilder.group({
      name:["",Validators.required],
      password:["",Validators.required],
    })  
  }


  login() {
    if (this.authService.login(this.formularioLogin.value['name'], this.formularioLogin.value['password'])) {
      this.router.navigate(['/tabs/tab1']);
      console.log("Autenticación exitosa");
    } else {
      // Muestra un mensaje de error si la autenticación falla
      console.log("Autenticación fallida");
    }
  }
  


}
