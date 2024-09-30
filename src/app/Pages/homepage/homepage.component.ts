import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { StatusComponent } from "../status/status.component";
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, StatusComponent,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
packdata:any
  constructor(private router:Router,private ds:ServicesService){}
  ngOnInit(): void {
    this.packdata=this.ds.homepage;
    
  }


}
