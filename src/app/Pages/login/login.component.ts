import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
login:FormGroup
constructor(private fb:FormBuilder,private router:Router,private ds:ServicesService){
  this.login =this.fb.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[a-zA-Z0-9]*') ]]
   
    
  })
  
}

Login(){
  var email = this.login.value.email
  var password = this.login.value.password

  const result = this.ds.login(email,password)

  if (result ==="admin") {
    alert("Admin Login Successful")
    localStorage.setItem('token', 'admin-authenticated');
    this.router.navigateByUrl("admin");
  }else if(result ==="user")
  {
    alert("Login Successful")
    localStorage.setItem('token', 'user-authenticated'); 
      this.router.navigateByUrl('profile')
    console.log(this.ds.db);
    
  }
}

}
