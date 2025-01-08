import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  adminEmail:string ='';
  userCount:number =0;
  totalBookingsCount :number =0;
  canceledBookingsCount:number=0;
  explore:any[]=[];
  schedule:any=[];

  newExploreItem= '';
  newScheduleItem='';


  constructor(private ds:ServicesService){}
  ngOnInit(): void {
    this.adminEmail =this.ds.customerMail || 'N/A';
    const allusers = this.ds.getAllUsers();
    this.userCount =allusers.length;

    const bookingHistory =this.ds.getAllUsersBookingHistory();
    this.totalBookingsCount =bookingHistory.reduce((total,user)=>total + user.bookings.length,0);
    this.canceledBookingsCount =bookingHistory.reduce((total,user)=>total+user.bookings.filter((booking:any)=> booking['status'] === 'Canceled').length,0);
    
  }

  addExploreItem() {
    if (this.newExploreItem.trim()) {
      this.explore.push(this.newExploreItem);
      this.newExploreItem = '';
    }
  }

  addScheduleItem() {
    if (this.newScheduleItem.trim()) {
      this.schedule.push(this.newScheduleItem);
      this.newScheduleItem = '';
    }
  }
}
