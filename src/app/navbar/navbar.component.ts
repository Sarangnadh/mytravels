import { Component } from '@angular/core';
import { FooterComponent } from "../Pages/footer/footer.component";
import { LoginComponent } from '../Pages/login/login.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private routes:Router){}
register(){
  this.routes.navigateByUrl("register")
}
}
