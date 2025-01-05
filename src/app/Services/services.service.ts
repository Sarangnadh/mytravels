import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  username: any
  customerMail: any
  private loggedIn = false; 
  currentUser:any;
  db: any = {
    
    "starkindu@gmail.com": { fullname: "Sarang", email:"starkindu@gmail.com", mobno: 8301056189, password:"12345678", role:"user", booking: [] ,bookingList:[]},


  }
  adminDb: any = {
    "admin@gmail.com": { fullname: "Admin", email:"admin@gmail.com", mobno: 1234567890, password: 'admin5789', role: "admin",userBookingList:[] }
  };
  constructor(private route :Router) {
    this.getInfo();
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
    if (this.db) {
      localStorage.setItem("cutomerMail", JSON.stringify(this.customerMail))
    }
    
    
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
    if (localStorage.getItem("customerMail")) {
      this.customerMail = JSON.parse(localStorage.getItem("customerMail") || '')
    }
    
  }
  
  cancelBooking(email: string, bookingToRemove: any): boolean {
    const user = this.db[email];
    if (user) {
      const bookingIndex = user.bookingList.findIndex(
        (booking: any) =>
          booking.From === bookingToRemove.From &&
          booking.Destination === bookingToRemove.Destination &&
          booking.DepartureDate === bookingToRemove.DepartureDate &&
          booking.ReturnDate === bookingToRemove.ReturnDate &&
          booking.CountPeople === bookingToRemove.CountPeople
      );
  
      if (bookingIndex > -1) {
        user.bookingList.splice(bookingIndex, 1); // remove from bookingList
        user.booking.splice(bookingIndex, 1); // remove from booking (if applicable)
        this.saveInfo(); // save updated data to localStorage
        return true;
      }
    }
    return false;
  }
  

// Get all users (Admin-specific)
getAllUsers() {
  const users = Object.entries(this.db)
      .map(([email, data]) => ({ email,data }));
    return users;
    
}

// Remove user (Admin-specific)
removeUser(email: string) {
  if (email in this.db) {
    delete this.db[email];
    this.saveInfo();
    return true;
  }
  return false;
}


logout(): void {
  // Clear localStorage for user-specific data
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('customerMail');

  // Reset service variables
  this.username = null;
  this.customerMail = null;

  // Optionally, clear any other user-specific data if needed
  console.log('User logged out successfully.');
}
getCurrentUser() {
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
        this.currentUser=this.adminDb[email];
        this.username = this.adminDb[email]["fullname"];
        this.customerMail = email;
        localStorage.setItem("token","admin-auth-token");
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        this.saveInfo();
        return "admin"; // Admin Login
      } else {
        alert("Incorrect Admin Password");
        return false;
      }
    } else if (email in this.db) {
      if (password == this.db[email]["password"]) {
        this.currentUser =this.db[email];
        this.username = this.db[email]["fullname"];
        this.customerMail = email;
        localStorage.setItem("token", "user-auth-token");
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        localStorage.setItem("userBookings",JSON.stringify(this.db[email].bookingList));
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
    const user = this.getCurrentUser();
    return user?.role === 'admin';
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
        bookingList:[],
        contactUs: [],
        createdDate: currentDate, 
        role:"user"

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
        })
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

  bookingHistory(email:any){
    return this.db[email].bookingList
  }
}
