import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  db: any = {
    " starkindu@gmail.com": { "fullname": "Sarang", "email": "starkindu@gmail.com", "mobno": 8301056189, "password": 12345678,"booking":[] },


  }
  constructor() { }
  // save details
  saveInfo(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))

    }
  }



//  getdetails
  getInfo(){
    if(localStorage.getItem("database")){
      this.db =JSON.parse(localStorage.getItem("database") || '')
    }
  }



  //login

  login(email: any, password: any) {

    let db = this.db

    if (email in db) {
      if (password == db[email]["password"]) {
        // this.customerName = db[mobno]["username"]
        // this.customerMobno = mobno
        // this.saveDetails()
        return true
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("User does not exist!!")
      return false
    }
  }

  //register
  register(fullname: any, email: any, mobno: any, password: any) {
    let db = this.db
    if (email in db) {
      return false
    }
    else {
      db[email] =
      {
        fullname,
        email,
        mobno,
        password,
        booking:[],
        contactUs:[],

      }
      console.log(db);
      this.saveInfo()
      return true

    }
  }


  bookingconfirm(customerName:any,email:any,mobno:any, password:any,tripInfo:any)
  {
    
  }
  
  }





