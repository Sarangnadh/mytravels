import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";
import { StatusComponent } from "../status/status.component";
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, StatusComponent,CommonModule],
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
  schedule:any
  ngOnInit(): void {

  }
  goToSchedule(id: number) {
    this.router.navigate([`/schedule/${id}`]);
  }

}
