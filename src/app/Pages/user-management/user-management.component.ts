import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
users:any[]=[];
usersBookingHistory: any[] = [];
  constructor(private ds:ServicesService){}
  ngOnInit(): void {
    this.users=this.ds.getAllUsers();
    // console.log(this.users);
    this.fetchUsersBookingHistory();
    // console.log(this.fetchUsersBookingHistory);
    
  }
  fetchUsersBookingHistory() {
    this.usersBookingHistory = this.ds.getAllUsersBookingHistory();
    // console.log(this.usersBookingHistory);
  }

  updateBookingStatus(email: string, bookingIndex: number, status: string) {
    const user = this.ds.db[email];
    if (user && user.bookingList[bookingIndex]) {
      user.bookingList[bookingIndex].status = status;
      this.ds.saveInfo(); // Save updated status to localStorage
      alert(`Booking status updated to ${status}`);
      this.fetchUsersBookingHistory(); // Refresh the list
      
    }
  }

  removeUser(email: string) {
    const confirmation = confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      if (this.ds.removeUser(email)) {
        alert("User removed successfully!");
        this.users = this.ds.getAllUsers(); // refresh user list
      } else {
        alert("Failed to remove user.");
      }
    }
  }
}
