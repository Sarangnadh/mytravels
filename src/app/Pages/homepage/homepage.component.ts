import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { StatusComponent } from "../status/status.component";
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, StatusComponent,CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
packdata:any
  constructor(private router:Router,private ds:ServicesService,){}
  homepage: any = [
    {
      id: 1,
      placename: "Goa",
      des: "Discover the magic of Goa with us – where every journey is a new adventure, and every sunset tells a story.",
      Img: "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6728.jpg?ga=GA1.1.1916324182.1722190779&semt=ais_hybrid",
      link: '/schedule/1'

    },
    {
      id: 2,
      placename: "Kashmir",
      des: "Discover the enchanting beauty of Kashmir, where every moment feels like a dream and every journey creates memories that last a lifetime.",
      Img: "https://img.freepik.com/free-photo/mountain-landscape-with-trees-summer_23-2148153669.jpg?ga=GA1.1.1916324182.1722190779&semt=ais_hybrid",
      link: '/schedule/2'

    },
    {
      id: 3,
      placename: "Meghalaya",
      des: "Embrace the serenity of Meghalaya, where misty hills and cascading waterfalls invite you to a paradise untouched by time.",
      Img: "https://www.kajaawa.com/wp-content/uploads/2022/05/Seven-Sisters-Falls-5-kaga.jpg",
      link:  '/schedule/3'

    },
    {
      id: 4,
      placename: "Sydney,Australia",
      des: "Experience the vibrant charm of Sydney, where iconic landmarks and sun-kissed beaches offer endless adventures down under.",
      Img: "https://themewagon.github.io/traveler/images/img_4.jpg",
      link:  '/schedule/4'

    },
    {
      id: 5,
      placename: "New York,USA",
      des: "Unleash the energy of New York, where the city never sleeps and every street holds a story waiting to be explored.",
      Img: "https://themewagon.github.io/traveler/images/img_1.jpg",
      link:  '/schedule/5'

    },
    {
      id: 6,
      placename: "Paris,France",
      des: "Fall in love with Paris, where romance, art, and history come alive in every corner of the City of Lights.",
      Img: "https://themewagon.github.io/traveler/images/img_3.jpg",
      link: '/schedule/6'

    },
    {
      id: 7,
      placename: "Greece,Europe",
      des: "Step into the timeless beauty of Greece, where ancient history and stunning islands create an unforgettable journey through Europe's cradle of civilization.",
      Img: "https://themewagon.github.io/traveler/images/img_5.jpg",
      link:  '/schedule/7',

    },

    {
      id: 8,
      placename: "Seoul,South Korea",
      des: "Discover the dynamic spirit of Seoul, where modern innovation meets rich traditions in a city that never ceases to inspire.",
      Img: "https://themewagon.github.io/traveler/images/img_2.jpg",
      link:  '/schedule/8'
    },

    {
      id: 9,
      placename: "Spain,Europe",
      des: "Immerse yourself in the vibrant soul of Spain, where sun-drenched coastlines, lively festivals, and rich history create a journey like no other.",
      Img: "https://themewagon.github.io/traveler/images/img_6.jpg",
      link:  '/schedule/9'

    },

  ]

  packages:any =[
    {
      id:1,
      packagename:"Honeymoon Package",
      subtitle1:"Your Dream Honeymoon Awaits",
      subtitle2:"Experience romance like never before!",
      packimg:"https://img.freepik.com/free-photo/portrait-pretty-romantic-couple-having-fun-tropical-islands_291049-1290.jpg?t=st=1729928838~exp=1729932438~hmac=18ed026b6f7aa1795946c8ffeafcb6a32b88a00766e7059ef99f9d412d379137&w=996",
      queote:"Create unforgettable memories with our romantic getaway packages. Celebrate love in the most enchanting destinations, designed for couples seeking romance and adventure!",
      des:"The best thing to hold onto in life is each other. - Audrey Hepburn",
      buttontitle:"Explore Honeymoon",
      link:"/main"
    },
    {
      id:2,
      packagename:"Holiday with Family",
      subtitle1:"Unforgettable Family Adventures",
      subtitle2:"Spend quality time with your loved ones",
      packimg:"https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747463.jpg?t=st=1729960212~exp=1729963812~hmac=a7439e3f462dc0b0bab7945bf5cf31cd508d11562952eb0aad434f25bd6b0b80&w=1060",
      queote:"Cherish every moment with your family on a relaxing and fun-filled vacation.",
      des:"Families are the compass that guides us - Brad Henry",
      buttontitle:"Explore Family Trips",
      link:"/main"
    },
    {
      id:3,
      packagename:"Beach Festival",
      subtitle1:"Experience the Ultimate Beach Party",
      subtitle2:"Sand, sun, and surf await!",
      packimg:"https://img.freepik.com/free-photo/portrait-happy-young-women-taking-selfie-mobile-phone-holi-festival_23-2148129275.jpg?t=st=1729960605~exp=1729964205~hmac=228ee7406bbc65bdfba3b2a6ea371ddaea11b35d3a3b28dfdfe77c110246fbe2&w=996",
      queote:"Soak up the sun and enjoy music, food, and festivities at a beach festival.",
      des:"Life is better at the beach.",
      buttontitle:"Explore Beach Festivals",
      link:"/main"
    },
    {
      id:4,
      packagename:"Holiday with Colleagues",
      subtitle1:"Team Bonding in Style",
      subtitle2:"Strengthen bonds while exploring new destinations",
      packimg:"https://img.freepik.com/free-photo/young-friends-nature_23-2148518161.jpg?t=st=1729960393~exp=1729963993~hmac=02fbdeba552a1ac15bc875feb697bd9bea005d510f56f7a6b23986e765182bff&w=996",
      queote:"Turn work friends into travel buddies and enjoy new experiences together.",
      des:"Great things in business are never done by one person - Steve Jobs",
      buttontitle:"Explore Group Trips",
      link:"/main"
    },
    {
      id:5,
      packagename:"Adventure Trips",
      subtitle1:"Thrilling Escapes for the Bold",
      subtitle2:"Conquer mountains, rivers, and more!",
      packimg:"https://img.freepik.com/free-photo/young-cheerful-travelers-with-backpacks-smiling-walking-canyon_176420-4225.jpg?t=st=1729961664~exp=1729965264~hmac=e30d2b3a72a66c0e16f7ed69f8c5e38e2bf4ffc1c121cce95efa07c6753d1aa1&w=996",
      queote:"Adventure is worthwhile in itself - Amelia Earhart",
      des:"The greatest adventure is what lies ahead.",
      buttontitle:"Explore Adventure Trips",
      link:"/main"
    },
    {
      id:6,
      packagename:"Mountain Fire Camps",
      subtitle1:"Reconnect with Nature",
      subtitle2:"Camp under the stars and around the fire",
      packimg:"https://img.freepik.com/free-photo/full-shot-friends-cooking-marshmallows_23-2148316075.jpg?t=st=1729960826~exp=1729964426~hmac=f942f554413c90fd5c18f7e93c4d6c6bf7f8a8b829597601095900d2728a9dd6&w=996",
      queote:"Unwind in the wilderness and enjoy the peaceful serenity of a mountain camp.",
      des:"In every walk with nature, one receives far more than he seeks - John Muir",
      buttontitle:"Explore Fire Camps",
      link:"/main"
    }
   ]
  schedule:any
  ngOnInit(): void {

  }
  goToSchedule(id: number) {
    this.router.navigate([`/schedule/${id}`]);
  }

}
