import { Component } from '@angular/core';
import { FooterComponent } from "../Pages/footer/footer.component";
import { LoginComponent } from '../Pages/login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FooterComponent,LoginComponent,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
