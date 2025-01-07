import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-booking-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.css']
})
export class BookingManagementComponent implements OnInit {
  bookings: any[] = []; // store booking data

  constructor(private router: Router, private ds:ServicesService ) {}

  ngOnInit(): void {
    const email = this.ds.customerMail;
    if(email)
    {
      this.bookings = this.ds.bookingHistory(email) || [];
      if(!this.bookings.length){
        alert('No bookings found ! Redirecting  to profile...');
        this.router.navigateByUrl('/profile');
      }
    }
    else{
      alert('User not logged in! Redirecting to login...');
      this.router.navigateByUrl('/login')
    }
  }

  cancelBooking(index: number): void {
    const confirmation = confirm('Are you sure you want to cancel this booking?');
    if (confirmation) {
      const email = this.ds.customerMail;
      const bookingToRemove =this.bookings[index];
      if (email) {
        const success = this.ds.cancelBooking(email,bookingToRemove);
        if (success) {
          this.bookings.splice(index,1)
          // localStorage.setItem('userBookings', JSON.stringify(this.bookings));
          alert('Booking canceled successfully!');
        } else {
          alert('Failed to cancel booking. Please try again.');
        }
      }
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/profile'); // navigate back to profile
  }
}
