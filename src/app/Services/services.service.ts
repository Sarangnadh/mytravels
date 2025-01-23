import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  username: any
  customerMail: any
  private loggedIn = false;
  currentUser: any;
  db: any = {
    "starkindu@gmail.com": {
      fullname: "Sarang", email: "starkindu@gmail.com", mobno: 8301056189, password: "12345678", role: "user",
      booking: [], bookingList: []
    },
  }
  adminDb: any = {
    "admin@gmail.com": {
      fullname: "Admin", email: "admin@gmail.com", mobno: 1234567890, password: 'admin5789', role: "admin",
      usersList: [], userBookingList: [], userCancelCount: [], adminRejection: [], tripConformationdetails: [], userRemoveList: []
    }
  };

  constructor(private route: Router) {
    this.getInfo()
  }
  // save details
  saveInfo() {
    if (this.db) {
      localStorage.setItem("database", JSON.stringify(this.db))
    }

    if (this.adminDb) {
      localStorage.setItem("adminDb", JSON.stringify(this.adminDb));
    }
    if (this.db) {
      localStorage.setItem("username", JSON.stringify(this.db))
    }
    // if (this.db) {
    //   localStorage.setItem("customerMail", JSON.stringify(this.customerMail))
    // }


  }



  //  getdetails
  getInfo() {
    if (localStorage.getItem("database")) {
      this.db = JSON.parse(localStorage.getItem("database") || '')
    }
    if (localStorage.getItem("adminDb")) {
      this.adminDb = JSON.parse(localStorage.getItem("adminDb") || '{}');
    }
    if (localStorage.getItem("username")) {
      this.username = JSON.parse(localStorage.getItem("username") || '')
    }
    // if (localStorage.getItem("customerMail")) {
    //   this.customerMail = JSON.parse(localStorage.getItem("customerMail") || '')
    // }

  }

  // cancelBooking(email: string, bookingToRemove: any): boolean {
  //   const user = this.db[email];

  //   if (user) {
  //     // Find the index of the booking to be removed
  //     const bookingIndex = user.bookingList.findIndex(
  //       (booking: any) =>
  //         booking.From === bookingToRemove.From &&
  //         booking.Destination === bookingToRemove.Destination &&
  //         booking.DepartureDate === bookingToRemove.DepartureDate &&
  //         booking.ReturnDate === bookingToRemove.ReturnDate &&
  //         booking.CountPeople === bookingToRemove.CountPeople
  //     );

  //     if (bookingIndex > -1) {
  //       // Remove the booking
  //       user.bookingList.splice(bookingIndex, 1); // Remove from bookingList
  //       user.booking.splice(bookingIndex, 1); // Remove from booking (if applicable)

  //       // Update the cancellation count in adminDb
  //       if (!this.adminDb["admin@gmail.com"].userCancelCount) {
  //         this.adminDb["admin@gmail.com"].userCancelCount = [];
  //       }

  //       const cancelIndex = this.adminDb["admin@gmail.com"].userCancelCount.findIndex(
  //         (entry: any) => entry.email === email
  //       );

  //       if (cancelIndex > -1) {
  //         // Increment the count for the user
  //         this.adminDb["admin@gmail.com"].userCancelCount[cancelIndex].count++;
  //       } else {
  //         // Add a new entry for the user
  //         this.adminDb["admin@gmail.com"].userCancelCount.push({ email, count: 1 });
  //       }

  //       // Store the cancellation count in the user's profile
  //       if (!user.cancellationHistory) {
  //         user.cancellationHistory = { count: 0, cancelledBookings: [] };
  //       }
  //       user.cancellationHistory.count++;
  //       user.cancellationHistory.cancelledBookings.push(bookingToRemove);

  //       // Save the updated data
  //       this.saveInfo();
  //       return true;
  //     }
  //   }

  //   return false;
  // }


  cancelBooking(email: string, bookingToRemove: any): boolean {
    const user = this.db[email];

    if (user) {
      // Find the index of the booking to be removed
      const bookingIndex = user.bookingList.findIndex(
        (booking: any) =>
          booking.From === bookingToRemove.From &&
          booking.Destination === bookingToRemove.Destination &&
          booking.DepartureDate === bookingToRemove.DepartureDate &&
          booking.ReturnDate === bookingToRemove.ReturnDate &&
          booking.CountPeople === bookingToRemove.CountPeople
      );

      if (bookingIndex > -1) {
        // Remove the booking
        user.bookingList.splice(bookingIndex, 1); // Remove from bookingList
        user.booking.splice(bookingIndex, 1); // Remove from booking (if applicable)

        // Update the cancellation count in adminDb
        if (!this.adminDb["admin@gmail.com"].userCancelCount) {
          this.adminDb["admin@gmail.com"].userCancelCount = [];
        }

        const cancelIndex = this.adminDb["admin@gmail.com"].userCancelCount.findIndex(
          (entry: any) => entry.email === email
        );

        if (cancelIndex > -1) {
          // Increment the count for the user
          this.adminDb["admin@gmail.com"].userCancelCount[cancelIndex].count++;
        } else {
          // Add a new entry for the user
          this.adminDb["admin@gmail.com"].userCancelCount.push({ email, count: 1 });
        }

        // Store the cancellation count in the user's profile
        if (!user.cancellationHistory) {
          user.cancellationHistory = { count: 0, cancelledBookings: [] };
        }
        user.cancellationHistory.count++;
        user.cancellationHistory.cancelledBookings.push(bookingToRemove);

        // Save the updated data
        this.saveInfo();
        return true;
      }
    }

    return false;
  }

  // Booking rejection by admin
  rejectBooking(email: string, bookingToReject: any): void {
    const admin = this.adminDb["admin@gmail.com"];
    
    if (!admin.adminRejection) {
      admin.adminRejection = [];
    }

    admin.adminRejection.push({ ...bookingToReject, email });

    // Save the updated data
    this.saveInfo();
  }




  logout(): void {
    // Clear all user-related data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('customerMail');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userBookings');

    // Reset the service variables
    this.currentUser = null;
    this.username = null;
    // this.customerMail = null;

    // Redirect to login or home page
    this.route.navigateByUrl('/login').then(() => {
      // Clear browser history to prevent back navigation
      window.location.reload();
    });

    console.log('User logged out successfully.');
  }

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    }
    return this.currentUser;
  }
  setCurrentUser(user: any) {
    this.currentUser = user;
    this.saveInfo();  // Save updated user to localStorage
  }
  //login
  login(email: any, password: any): string | boolean {
    if (email in this.adminDb) {
      if (password == this.adminDb[email]["password"]) {
        this.currentUser = this.adminDb[email];
        this.username = this.adminDb[email]["fullname"];
        this.customerMail = email;
        localStorage.setItem("token", "admin-auth-token");
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        this.saveInfo();
        return "admin"; // Admin Login
      } else {
        alert("Incorrect Admin Password");
        return false;
      }
    } else if (email in this.db) {
      if (password == this.db[email]["password"]) {
        this.currentUser = this.db[email];
        this.username = this.db[email]["fullname"];
        this.customerMail = email;
        localStorage.setItem("token", "user-auth-token");
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        localStorage.setItem("userBookings", JSON.stringify(this.db[email].bookingList));
        this.saveInfo();
        return "user"; // User Login
      } else {
        alert("Incorrect User Password");
        return false;
      }
    } else {
      alert("User does not exist!! Please Create an account");
      this.route.navigateByUrl("register")
      return false;
    }
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Simulated login check
  }
  isAdmin(): boolean {
    return this.currentUser?.role === 'admin'
  }


  //register
  register(fullname: any, email: any, mobno: any, password: any) {
    let db = this.db
    if (email in db) {
      return false
    }
    else {
      const currentDate = new Date().toISOString();
      db[email] =
      {
        fullname,
        email,
        mobno,
        password,
        booking: [],
        bookingList: [],
        contactUs: [],
        createdDate: currentDate,
        role: "user"

      }
      if (this.adminDb["admin@gmail.com"] && this.adminDb["admin@gmail.com"].usersList) {
        this.adminDb["admin@gmail.com"].usersList.push({
          fullname,
          email,
          mobno,
          password,
          createdDate: currentDate,
        });
      }
      console.log(db);
      this.saveInfo()
      return true

    }
  }


  bookingconfirm(customerName: any, email: any, mobno: any, password: any, tripInfo: any, preferences: any) {
    let db = this.db
    const user = this.db[email];

    if (email in db) {
      if (password == db[email]["password"]) {
        db[email]["booking"].push({
          FullName: customerName,
          Mobile: mobno,
          From: tripInfo.from,
          Destination: tripInfo.destination,
          DepartureDate: tripInfo.selectDate,
          ReturnDate: tripInfo.returnDate,
          CountPeople: tripInfo.countPeople,
          SelectedHotel: preferences.selectedHotel,
          SelectedFlight: preferences.selectedFlight,
          status: "Pending",
        })
        db[email].bookingList.push({
          FullName: customerName,
          Mobile: mobno,
          From: tripInfo.from,
          Destination: tripInfo.destination,
          DepartureDate: tripInfo.selectDate,
          ReturnDate: tripInfo.returnDate,
          CountPeople: tripInfo.countPeople,
          SelectedHotel: preferences.selectedHotel,
          SelectedFlight: preferences.selectedFlight,
          status: "Pending",
        })
        // Update adminDb's userBookingList
        const admin = this.adminDb["admin@gmail.com"];
        if (admin) {
          if (!admin.userBookingList) {
            admin.userBookingList = [];
          }

          // Add booking details to adminDb's userBookingList
          admin.userBookingList.push({
            email,
            ...db[email]["booking"],
          });

          // Increment booking count for the user
          if (!admin.userBookingCount) {
            admin.userBookingCount = [];
          }

          const userBookingIndex = admin.userBookingCount.findIndex(
            (entry: any) => entry.email === email
          );

          if (userBookingIndex > -1) {
            admin.userBookingCount[userBookingIndex].count++;
          } else {
            admin.userBookingCount.push({ email, count: 1 });
          }
        }
        this.saveInfo()
        return db[email]["booking"]
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("User does not exist")
      return false
    }
  }

  bookingHistory(email: any) {
    return this.db[email].bookingList

  }
}
