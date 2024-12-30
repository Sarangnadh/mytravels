import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;
  username: string | null = null;
  constructor(private routes:Router,private service:ServicesService){
    this.username = this.service.username;

  }
  ngOnInit(): void {
    this.isLoggedIn =this.service.isLoggedIn();
  }

  logout():void{
this.service.logout();
this.isLoggedIn =false;
alert('You have been logged out')
this.routes.navigateByUrl('login')
}
  
register(){
  this.routes.navigateByUrl("register")
}
}
