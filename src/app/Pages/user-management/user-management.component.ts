import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  allUsers: any[] = [];
  adminDb: any;
  selectedUser: any = null;
  bookingList: any[] = [];
  userCancelCount: any[] = [];
  adminRejectionList: any[] = [];
  constructor(private ds: ServicesService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.adminDb = this.ds.adminDb["admin@gmail.com"];
    this.allUsers = Object.values(this.ds.db);
  }

  viewUserBookings(user: any) {
    this.selectedUser = user;
    this.bookingList = user.bookingList || [];
  }

  confirmBooking(user: any, booking: any) {
    booking.status = "Confirmed";
    const admin = this.ds.adminDb["admin@gmail.com"];
    admin.tripConformationdetails.push({ ...booking, email: user.email });

    // Save updated data
    this.ds.saveInfo();
    alert(`Booking confirmed for ${user.fullname}`);
    this.loadUserData();
  }

  cancelBooking(user: any, booking: any) {
    const isCancelled = this.ds.cancelBooking(user.email, booking);
    if (isCancelled) {
      // Log rejection as well
      this.ds.rejectBooking(user.email, booking);

      // Save updated data
      this.ds.saveInfo();
      alert(`Booking canceled for ${user.fullname}`);
      this.loadUserData();
    } else {
      alert("Failed to cancel booking.");
    }
  }

  removeUser(user: any) {
    const admin = this.ds.adminDb["admin@gmail.com"];
    if (!admin.userRemoveList) {
      admin.userRemoveList = [];
    }

    // Add the user to the removal list
    admin.userRemoveList.push({ email: user.email, fullname: user.fullname });
    delete this.ds.db[user.email];

    // Save updated data
    this.ds.saveInfo();
    alert(`${user.fullname} has been removed.`);
    this.loadUserData();
  }
}
