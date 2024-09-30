import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { StatusComponent } from "../status/status.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent, StatusComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
 

  ngOnInit() {
  
  }



 
}
