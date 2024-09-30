import { Component } from '@angular/core';
import { FooterComponent } from "../Pages/footer/footer.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
