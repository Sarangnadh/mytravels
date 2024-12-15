import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  username: any
  cutomerMail: any
  private loggedIn = false; 
  db: any = {
    
    "starkindu@gmail.com": { fullname: "Sarang", email:"starkindu@gmail.com", mobno: 8301056189, password:"12345678", role:"user", booking: [] },


  }
  adminDb: any = {
    "admin@gmail.com": { fullname: "Admin", email:"admin@example.com", mobno: 1234567890, password: 'admin5789', role: "admin" }
  };
  constructor() {
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
    if (this.db) {
      localStorage.setItem("cutomerMail", JSON.stringify(this.db))
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
      this.cutomerMail = JSON.parse(localStorage.getItem("customerMail") || '')
    }
    
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
  localStorage.removeItem('username');
  localStorage.removeItem('customerMail');

  // Reset service variables
  this.username = null;
  this.cutomerMail = null;
  this.loggedIn = false;

  // Optionally, clear any other user-specific data if needed
  console.log('User logged out successfully.');
}

  //login
  login(email: any, password: any): string | boolean {
    if (email in this.adminDb) {
      if (password == this.adminDb[email]["password"]) {
        this.username = this.adminDb[email]["fullname"];
        this.cutomerMail = email;
        this.saveInfo();
        return "admin"; // Admin Login
      } else {
        alert("Incorrect Admin Password");
        return false;
      }
    } else if (email in this.db) {
      if (password == this.db[email]["password"]) {
        this.username = this.db[email]["fullname"];
        this.cutomerMail = email;
        this.saveInfo();
        return "user"; // User Login
      } else {
        alert("Incorrect User Password");
        return false;
      }
    } else {
      alert("User does not exist!!");
      return false;
    }
  }


isLoggedIn():boolean{
  return this.loggedIn
}
  // login(email: any, password: any): string | boolean {

  //   let db = this.db

  //   if (email in db) {
  //     if (password == db[email]["password"]) {
  //       this.username = db[email]["fullname"]
  //       this.cutomerMail = email
  //       this.saveInfo()
  //       if(db[email]["role"]=="admin"){
  //         return "admin"
  //       }
  //       return "user"
  //     }
  //     else {
  //       alert("Incorrect Password")
  //       return false
  //     }
  //   }
  //   else {
  //     alert("User does not exist!!")
  //     return false
  //   }
  // }

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
}
