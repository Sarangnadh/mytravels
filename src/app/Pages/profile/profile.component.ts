import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include FormsModule here
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any = {};
  editUser: any = {};

  constructor(private ds: ServicesService, private router: Router) {}

  ngOnInit(): void {

    const isTokenAvailable = localStorage.getItem('token');
    if (!isTokenAvailable) {
      alert('You need to log in to view your profile');
      this.router.navigateByUrl('login'); // Redirect to login page if token is not available
      return;
    }

    // if (!this.ds.isLoggedIn()) {
    //   alert('You need to log in to view your profile');
    //   this.router.navigateByUrl('login'); // Redirect to login page if
      
    // }
    const email = this.ds.customerMail; // Retrieve logged-in user's email
    const userData = this.ds.db[email];
    if (userData) {
      this.user = {
        fullName: userData.fullname,
        email: userData.email,
        phone: userData.mobno,
        joinedDate: new Date(userData.createdDate).toLocaleDateString(),
        address: userData.address || '' // Add address default value
      };
    } else {
      alert('User data not found!');
      this.router.navigateByUrl('login'); // Redirect to login if user data is unavailable
    }
  }

  editProfile() {
    this.editUser = { ...this.user };
  }

  saveProfile() {
    this.user = { ...this.editUser };
    this.ds.db[this.ds.customerMail] = { ...this.ds.db[this.ds.customerMail], ...this.user };
    this.ds.saveInfo();
    alert('Profile updated successfully!');
  }

  viewBookings() {
    const email = this.ds.customerMail;
    const bookings = this.ds.db[email]?.booking || [];
    if (bookings.length) {
      alert(`You have ${bookings.length} bookings.`);
      this.router.navigateByUrl('bookings');
    } else {
      alert('No bookings available.');
    }
  }

  logout() {
    this.ds.logout();
    // this.ds.saveInfo();
    this.router.navigateByUrl('login');
  }
}
