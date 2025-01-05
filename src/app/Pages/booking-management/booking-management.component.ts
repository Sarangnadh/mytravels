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
    // retrieve bookings from router state or localStorage
    const stateBookings = history.state.bookings;
    const storedBookings = localStorage.getItem('userBookings');

    if (stateBookings) {
      this.bookings = stateBookings; // data passed via router state
      localStorage.setItem('userBookings', JSON.stringify(this.bookings));
    } else if (storedBookings) {
      this.bookings = JSON.parse(storedBookings); // data persisted in localStorage
    } else {
      alert('No bookings found! Redirecting to profile...');
      this.router.navigateByUrl('/profile'); // redirect back if no data
    }
  }

  cancelBooking(index: number): void {
    const confirmation = confirm('Are you sure you want to cancel this booking?');
    if (confirmation) {
      // remove booking from local list
      const removedBooking = this.bookings.splice(index, 1);

      // update the bookings in the service and localStorage
      const email = this.ds.customerMail;
      if (email) {
        const success = this.ds.cancelBooking(email, removedBooking[0]);
        if (success) {
          localStorage.setItem('userBookings', JSON.stringify(this.bookings));
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
