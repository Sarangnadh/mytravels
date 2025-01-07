import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any = {};
  bookings: any[] = [];
  createdDate: string = '';
  constructor(private ds: ServicesService, private router: Router) {}

  ngOnInit(): void {
    const storedUserData = localStorage.getItem('userData');
    const storedBookings = localStorage.getItem('userBookings');

    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);

      if (this.userData.createdDate) {
        const date = new Date(this.userData.createdDate);
        this.createdDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }

      if (storedBookings) {
        this.bookings = JSON.parse(storedBookings);
      } else if (this.userData.email) {
        this.bookings = this.ds.bookingHistory(this.userData.email); // fetch booking history
        localStorage.setItem('userBookings', JSON.stringify(this.bookings));
      }
    } else {
      this.router.navigateByUrl('/login'); // redirect to login if no user data
    }
  }

  logout(): void {
    this.ds.logout();
    localStorage.removeItem('userBookings'); // clear bookings on logout
    this.router.navigateByUrl('');
  }

  viewBookings(): void {
    if (this.bookings.length > 0) {
      alert(`You have ${this.bookings.length} bookings.`);
      localStorage.setItem('userBookings', JSON.stringify(this.bookings)); // ensure bookings are in localStorage
      this.router.navigate(['/bookings'], {
        state: { bookings: this.bookings } // pass data via router state
      });
    } else {
      alert('No bookings available.');
    }
  }
}
