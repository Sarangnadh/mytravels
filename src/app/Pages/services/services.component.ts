import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { StatusComponent } from "../status/status.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent, StatusComponent,CommonModule,RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
 

  ngOnInit() {
  
  }



 
}
