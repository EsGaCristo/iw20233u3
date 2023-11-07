import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) {
    this.formularioLogin = this.formBuilder.group({
      name:["",Validators.required],
      password:["",Validators.required],
    })  
  }
  public prueba(){
    
    
  }


}
