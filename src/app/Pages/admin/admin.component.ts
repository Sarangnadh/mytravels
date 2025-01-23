import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminEmail: string = '';
  userCount: number = 0;
  totalBookingsCount: number = 0;
  userCancelCounts: { email: string; count: number }[] = [];
  canceledBookingsCount: number = 0; // Total user cancellations
  adminRejections: any[] = []; // Admin rejection list
  adminRejectionCount: number = 0;
  tripConfirmationCount: number = 0;
  userRemoveCount: number = 0;
  explore: any[] = [];
  schedule: any[] = [];
  newExploreItem = '';
  newScheduleItem = '';

  constructor(private ds: ServicesService) {}

  ngOnInit(): void {
    const adminData = this.ds.adminDb['admin@gmail.com'];

    this.adminEmail = adminData.email;

    // Fetch counts and data
    this.userCount = adminData.usersList.length || 0;
    this.totalBookingsCount = adminData.userBookingList.length || 0;

    this.userCancelCounts = adminData.userCancelCount || [];
    this.canceledBookingsCount = this.userCancelCounts.reduce(
      (total: number, user: any) => total + user.count,
      0
    );

    this.adminRejections = adminData.adminRejection || [];
    this.adminRejectionCount = this.adminRejections.length || 0;

    this.tripConfirmationCount = adminData.tripConformationdetails.length || 0;
    this.userRemoveCount = adminData.userRemoveList.length || 0;

    // Fetch explore and schedule data
    this.explore = adminData.explore || [];
    this.schedule = adminData.schedule || [];
  }

  addExploreItem() {
    if (this.newExploreItem.trim()) {
      this.explore.push(this.newExploreItem);
      this.newExploreItem = '';
      this.saveAdminData(); // Save changes to adminDb
    }
  }

  addScheduleItem() {
    if (this.newScheduleItem.trim()) {
      this.schedule.push(this.newScheduleItem);
      this.newScheduleItem = '';
      this.saveAdminData(); // Save changes to adminDb
    }
  }

  saveAdminData() {
    const adminData = this.ds.adminDb['admin@gmail.com'];
    adminData.explore = this.explore;
    adminData.schedule = this.schedule;
    this.ds.saveInfo(); // Save data to localStorage
  }
}
