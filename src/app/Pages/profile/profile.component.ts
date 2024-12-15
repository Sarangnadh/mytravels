import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user:any = {}
  
  constructor( private ds:ServicesService,private router:Router){}
  ngOnInit(): void {
    const email = this.ds.cutomerMail; // Retrieve logged-in user's email
    const userData = this.ds.db[email];
    if (userData) {
      this.user = {
        fullName: userData.fullname,
        email: userData.email,
        phone: userData.mobno,
        joinedDate: new Date(userData.createdDate).toLocaleDateString(), 
        address: '123 Street, City, Country',  // Placeholder, update if necessary
      };
    } else {
      alert('User data not found!');
      this.router.navigateByUrl('login'); // Redirect to login if user data is unavailable
    }
  
  }
  editProfile() {
    alert('Edit Profile clicked!');
  }

  viewBookings() {
    const email = this.ds.cutomerMail;
    const bookings = this.ds.db[email]?.booking || [];
    if (bookings.length) {
      console.log('User Bookings:', bookings);
      alert(`You have ${bookings.length} bookings.`);
    } else {
      alert('No bookings available.');
    }
    }

  logout() {
    this.ds.cutomerMail = null;
    this.ds.username = null;
    this.ds.saveInfo(); // Clear saved session info
    this.router.navigateByUrl('login');
    }

}
