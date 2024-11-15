import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register: FormGroup


  constructor(private fb: FormBuilder, private router: Router, private ds: ServicesService) {
    
    this.register = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      mobno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], 
       password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[a-zA-Z0-9]*') ]],
       
    });
      
  }

  registernow() {

    var fullname = this.register.value.fullname
    var email = this.register.value.email
    var mobno = this.register.value.mobno
    var password = this.register.value.password
    console.log(this.register.valid);

    if (this.register.valid) {

      const result = this.ds.register(fullname, email, mobno,password)

      if (result) {
        alert("Successfully registered")
        this.router.navigateByUrl("navbar/login")
      }
      else {
        alert("Already existing Customer...Please Login!!!")
      }

    }
    else {
      alert("Invalid Form")
    }
  }





}



