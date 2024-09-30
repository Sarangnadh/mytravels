import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  db: any = {
   " starkindu@gmail.com": {"fullname": "Sarang", "email":"starkindu@gmail.com", "mobno": 8301056189, "password": 12345678,  },
 

  }


  constructor() { }



  homepage:any = [
    {
      id:1,
      placename:"Goa",
      des:"Discover the magic of Goa with us – where every journey is a new adventure, and every sunset tells a story.",
      Img:"https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6728.jpg?ga=GA1.1.1916324182.1722190779&semt=ais_hybrid",
      link:'\main'

    },
    {
      id:2,
      placename:"Kashmir",
      des:"Discover the enchanting beauty of Kashmir, where every moment feels like a dream and every journey creates memories that last a lifetime.",
      Img:"https://img.freepik.com/free-photo/mountain-landscape-with-trees-summer_23-2148153669.jpg?ga=GA1.1.1916324182.1722190779&semt=ais_hybrid",
      link:'\main'

    },
    {
      id:3,
      placename:"Meghalaya",
      des:"Embrace the serenity of Meghalaya, where misty hills and cascading waterfalls invite you to a paradise untouched by time.",
      Img:"https://www.kajaawa.com/wp-content/uploads/2022/05/Seven-Sisters-Falls-5-kaga.jpg",
      link:'\main'

    },
    {
      id:4,
      placename:"Sydney,Australia",
      des:"Experience the vibrant charm of Sydney, where iconic landmarks and sun-kissed beaches offer endless adventures down under.",
      Img:"https://themewagon.github.io/traveler/images/img_4.jpg",
      link:'\main'

    },
    {
      id:5,
      placename:"New York,USA",
      des:"Unleash the energy of New York, where the city never sleeps and every street holds a story waiting to be explored.",
      Img:"https://themewagon.github.io/traveler/images/img_1.jpg",
      link:'\main'

    },
      {
      id:6,
      placename:"Paris,France",
      des:"Fall in love with Paris, where romance, art, and history come alive in every corner of the City of Lights.",
      Img:"https://themewagon.github.io/traveler/images/img_3.jpg",
      link:'\main'

    },
    {
      id:7,
      placename:"Greece,Europe",
      des:"Step into the timeless beauty of Greece, where ancient history and stunning islands create an unforgettable journey through Europe's cradle of civilization.",
      Img:"https://themewagon.github.io/traveler/images/img_5.jpg",
      link:'\main'

    },
    {
      id:8,
      placename:"Seoul,South Korea",
      des:"Discover the dynamic spirit of Seoul, where modern innovation meets rich traditions in a city that never ceases to inspire.",
      Img:"https://themewagon.github.io/traveler/images/img_2.jpg",
      link:'\main'
    },
    {
      id:9,
      placename:"Spain,Europe",
      des:"Immerse yourself in the vibrant soul of Spain, where sun-drenched coastlines, lively festivals, and rich history create a journey like no other.",
      Img:"https://themewagon.github.io/traveler/images/img_6.jpg",
      link:'\main'

    },
    
  ]

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
register(fullname: any,email:any, mobno: any, password: any) {
  let db = this.db
  if (email in db ) {
    return false
  }
  else {
    db[email] =
    {
      fullname,
      email,
      mobno,
      password,
     
    }
    console.log(db);
    // this.saveDetails()
    return true

  }
}





}
