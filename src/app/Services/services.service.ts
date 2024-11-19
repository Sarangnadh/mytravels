import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  username:any
  cutomerMail:any
db: any = {
    "starkindu@gmail.com": { "fullname": "Sarang", "email": "starkindu@gmail.com", "mobno": 8301056189, "password": 12345678,"booking":[] },


  }
  constructor() { 
    this.getInfo()
  }
  // save details
  saveInfo(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))
    }

    if(this.db){
      localStorage.setItem("username",JSON.stringify(this.db))
    }
if(this.db){
  localStorage.setItem("cutomerMail",JSON.stringify(this.db))
}
  
  }



//  getdetails
  getInfo(){
    if(localStorage.getItem("database")){
      this.db =JSON.parse(localStorage.getItem("database") || '')
    }
    if(localStorage.getItem("username")){
      this.username =JSON.parse(localStorage.getItem("username") || '')
    }
    if(localStorage.getItem("customerMail")){
      this.cutomerMail =JSON.parse(localStorage.getItem("customerMail") || '')
    }
  }



  //login

  login(email: any, password: any) {

    let db = this.db

    if (email in db) {
      if (password == db[email]["password"]) {
        this.username = db[email]["fullname"]
         this.cutomerMail = email
        this.saveInfo()
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





