import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  username: string | null = null;
  constructor(private routes:Router,private service:ServicesService){
    this.isLoggedIn = this.service.isLoggedIn();
    this.username = this.service.username;

  }
  logout() {
    this.service.logout();
    this.isLoggedIn = false;
  }
register(){
  this.routes.navigateByUrl("register")
}
}
