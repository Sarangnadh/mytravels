import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {

  selectedSchedule:any
  currentId: any;
constructor(private router:Router,private route:ActivatedRoute){}
 scheduledetails: any = [
    {
      id: 1,
      pname: "Goa",
      mustvisit :[
        {
          mvid:1,
          mvname:"Baga Beach",
          des:"Baga Beach is one of the most popular beaches in North Goa, known for its vibrant nightlife, water sports, and shacks.",
          img:"https://img.freepik.com/free-photo/beautiful-view-palm-trees-beach-northern-brazil-ceara-fortaleza-cumbuco-parnaiba_181624-14217.jpg?t=st=1728842644~exp=1728846244~hmac=f23bdf92fb3fba7268263ee93a6bc1cab5ab46d4bbfe89034cf2877ad24bca54&w=996"
        },
        {
          mvid:2,
          mvname:"Dudhsagar Falls",
          des:"ocated on the Goa-Karnataka border, Dudhsagar Waterfalls is one of the tallest waterfalls in India, offering breathtaking natural beauty.",
          img:"https://media.istockphoto.com/id/1200790835/photo/the-huge-waterfall-dudhsagar-and-the-railway-bridge-passing-through-it-karnataka-india.jpg?s=2048x2048&w=is&k=20&c=_ciuaoE4_g_CDcJn7HICzU3brg3VepWBfV1isIGnVT0="
        },
        {
          mvid:3,
          mvname:"Anjuna Beach",
          des:"Famous for its flea markets and laid-back vibe, Anjuna Beach is a haven for hippie culture and stunning sunsets.",
          img:"https://www.tourmyindia.com/states/goa/image/anjuna-beach-banner.webp"
        },
        {
          mvid:4,
          mvname:"Fort Aguada",
          des:" A 17th-century Portuguese fort overlooking the Arabian Sea, Fort Aguada is a historic landmark with panoramic views.",
          img:"https://makeithappen.co.in/wp-content/uploads/2023/01/Fort-Aguada-Port-Jail-G1-Mobile-1.jpg"
        },
        {
          mvid:5,
          mvname:"Chapora Fort",
          des:"Known for its picturesque views of the coastline, Chapora Fort became famous after being featured in the Bollywood movie Dil Chahta Hai.",
          img:"https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/1721477325733_chopra%20fort%20CV%20.jpg"
        },
        {
          mvid:6,
          mvname:"Basilica of Bom Jesus",
          des:" A UNESCO World Heritage site, this basilica is famous for holding the mortal remains of St. Francis Xavier.",
          img:"https://christian.net/wp-content/uploads/2024/02/where-is-basilica-of-bom-jesus-located-1706972194.jpg"
        }
      ],
      airlines:[
        {
          airId:1,
          airlineName:"AirIndia",
          img:"https://www.aljazeera.com/wp-content/uploads/2024/05/AFP__20240118__34FQ2ZX__v1__HighRes__IndiaEconomyAviation-1-1715129186.jpg?resize=770%2C513&quality=80"

         
        },
        {
          airId:2,
          airlineName:"Vistara",
          img:"https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2022/01/6.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
        },
        {
          airId:3,
          airlineName:"AirIndiaExpress",
          img:"https://images.deccanherald.com/deccanherald%2F2023-10%2F9f700582-5aef-4ea3-a684-86b2d6d04df9%2FPTI10_18_2023_000429B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.3"
        }
        ],
  
      hotel: [
        {
          hid:1,
          star: "3star",
          name: "De Alturas Resort",
          address:"Baman Vaddo, Candolim, Bardez, Goa 403515",
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a0/d8/ea/dusk.jpg?w=700&h=-1&s=1",
        },
        {
          hid2:2,
          star: "3Star",
          address:"The Ocean Park Resort",
          name: "Casa Albuquerque ",
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9b/85/91/facade.jpg?w=700&h=-1&s=1"

        },
        {
          hid:3,
          star: "3star",
          name: "The Baga Marina Beach Resort & Hotel",
          address:"Saunta Khobra Wado, Baga, Calangute, Goa 403516",
          img: "https://content.jdmagicbox.com/comp/goa/x2/0832px832.x832.120411121039.f5x2/catalogue/the-baga-marina-beach-resort-bardez-goa-beach-resorts-1i2mrpjuzs.jpg",
        },
        {
          hid:4,
          star: "3star",
          name: "Resort De Coracao",
          address:" Gaura Waddo, Calangute Beach, Calangute, Goa 403516",
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/f4/96/e5/hotel-exterior-evening.jpg?w=700&h=-1&s=1",
        },
        {
          hid:5,
          star: "3star",
          name: "Sharanam Green Resort",
          address:" Near Calangute Beach, Anna Waddo, Calangute, Goa 403516",
          img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/324921465.jpg?k=348f951ac0b2f91fe39df081fb6ae45f4930093acaada83853389cae4909b36c&o=",
        },
        // 5star
        {
          hid:6,
          star: "5star",
          name: "The Leela Goa",
          address:" Mobor, Cavelossim, Salcette, Goa 403731",
          img: "https://www.zankyou.co.in/images/card-main/707/30df/550/475/w/609825/-/1510592003.jpg",
        },
        {
          hid:7,
          star: "5star",
          name: "Taj Exotica Resort & Spa",
          address:"Calwaddo, Benaulim, Salcette, Goa 403716",
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/70096978.jpg?k=9128f3db632d0ab97cef32032fa0f225ac47114b23ec6498d3721bef92564312&o=&hp=1",
        },
        {
          hid:8,
          star: "5star",
          name: "Park Hyatt Goa Resort and Spa",
          address:"Arossim Beach, Cansaulim, South Goa 403712",
          img: "https://media.cntraveler.com/photos/53dacf436dec627b14a041fe/16:9/w_2560%2Cc_limit/park-hyatt-goa-resort-and-spa-goa-india-108526-4.jpg",
        },
      
        {
          hid:9,
          star: "5star",
          name: "ITC Grand Goa Resort & Spa",
          address:"Arossim Beach, Cansaulim, Goa 403712",
          img: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandgoa-goa/images/overview/headmast-desktop/resort-outdoors.png",
        },
        {
          hid:10,
          star: "5star",
          name: "Alila Diwa Goa",
          address:"48/10, Village Majorda, Adao Waddo",
          img: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/02/14/0827/Alila-Diwa-Goa-P001-Exterior-Panorama.jpg/Alila-Diwa-Goa-P001-Exterior-Panorama.16x9.jpg",
        },
       
        // seven star
        {
          hid: 11,
          star: "7star",
          name: "W Goa",
          address: "Vagator Beach, Bardez, Goa 403509",
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2c/d3/ce/porte-cochere.jpg?w=700&h=-1&s=1",
        },
        {
          hid: 12,
          star: "7star",
          name: "The Postcard Moira",
          address: "Pinto Vaddo, Moira, Bardez, Goa 403507",
          img: "https://seoimgak.mmtcdn.com/blog/sites/default/files/1280X800-PostCard-20062019.jpg?OUzK0ac4OEqOPK0hHmcvv_5WWWteW_uf",
        },
        {
          hid: 13,
          star: "7star",
          name: "Grand Hyatt Goa",
          address: "P.O. Goa University, Bambolim, Goa 403206",
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330281475.jpg?k=8a8327ac1d4e38831b091c30085c5ee3951f0827073a79269a3fee5462a8112c&o=&hp=1",
        },
        {
          hid:14,
          star: "7star",
          name: "The Postcard Cuelim",
          address:"Cuelim, Goa 403712",
          img: "https://www.myboutiquehotel.com/photos/111703/the-postcard-cuelim-goa-cansaulim-001-59391-1110x700.jpg",
        },
        {
          hid:15,
          star: "5star",
          name: "Taj Fort Aguada Resort & Spa",
          address:"Sinquerim, Candolim, Goa 403515",
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206386163.jpg?k=87d7f3d3eae1040e22ccf31da1c9ac9a9e1e27ea520ee15ebfcc507202bef18f&o=&hp=1",
        },
      ],
   

    },
     // Kashmir
  {
    id: 2,
    pname: "Kashmir",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Dal Lake",
        des: "Dal Lake is known for its houseboats, shikaras, and stunning views of the surrounding mountains.",
        img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcS-J9PNQzSrCdrdnJ1wSep_oCpk02BSLHwaipzaO4jA4lQ1T-ar8F5ETlTEPuywt_6nzmlYhEJudKU9_fKIHeXUnJXWjbYcCDJoLLNpQw",
      },
      {
        mvid: 2,
        mvname: "Gulmarg",
        des: "Gulmarg is a popular ski resort and mountain retreat, offering scenic beauty and adventure sports.",
        img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTe5nSlJAgWpy7nPaLAVxWQTMVdxJlE5bVSxDLPr41b-Fwpaw7rs64kZRHVkktuDBT8fLBW63nND6yIMI7sWig9FqH1_-Km_RaBO-stzw",
      },
      {
        mvid: 3,
        mvname: "Sonamarg",
        des: "Sonamarg is a picturesque hill station known for its green meadows and breathtaking views.",
        img: "https://lh5.googleusercontent.com/p/AF1QipMYNDzdv2hYnJoDKt0ltCIQQgLLJ7W_39cq_bCj=w743-h429-n-k-no",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "GoAir",
        img: "https://www.thestatesman.com/wp-content/uploads/2019/06/GoAir-1.jpg",
      },
      {
        airId: 2,
        airlineName: "SpiceJet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZZBgX2Mup0wpgI9VU4Dffhc1gzN_nqmoHg&s",
      },
      {
        airId: 3,
        airlineName: "IndiGo",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/cd/51/da/indigo.jpg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Pine Spring",
        address: "Gulmarg, Kashmir",
        img: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_mobileactualimage/v1522234383/Hotel/Gulmarg/00007932/10_nmxSf2.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Khyber Himalayan Resort & Spa",
        address: "Gulmarg, Kashmir",
        img: "https://i0.wp.com/thetalesofatraveler.com/wp-content/uploads/2017/05/1-IMG_2629-1.jpg?resize=1024%2C683&ssl=1",
      },
      {
        hid: 3,
        star: "7star",
        name: "Lalit Grand Palace",
        address: "Srinagar, Kashmir",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/94/ee/14/exterior-2.jpg?w=700&h=-1&s=1",
      },
    ],
  },

  // Meghalaya
  {
    id: 3,
    pname: "Meghalaya",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Living Root Bridges",
        des: "The Living Root Bridges are a natural marvel, unique to Meghalaya.",
        img: "https://mediawala.in/wp-content/uploads/2024/08/14living-root-bridge-aadhan2.jpg",
      },
      {
        mvid: 2,
        mvname: "Nohkalikai Falls",
        des: "One of the tallest waterfalls in India, offering mesmerizing views.",
        img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRBrUe4oJNBfSUSNJwtefNLx7oyu9Vl8Kq-27A8mCGYet1AZGv7G7wgvJiSGPrhELk2hyqhzTwlYk7OpORKBslqCVjQ97Zv_5fFQLy5us",
      },
      {
        mvid: 3,
        mvname: "Umiam Lake",
        des: "Umiam Lake is a scenic man-made reservoir surrounded by lush green hills.",
        img: "https://static.toiimg.com/thumb/50832332/Things-to-do-in-Shillongthe-abode-of-clouds.jpg?width=1200&height=900",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "AirAsia",
        img: "https://walawalapictures.com/wp-content/uploads/2020/05/AirAsia_cabin_crew_04_Logo.jpg",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFyzobvHIcZCd6runK9T4mGK8MERWSdgl6g&s",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://s28477.pcdn.co/wp-content/uploads/2020/07/Spicejet_2.jpg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Ri Kynjai Resort",
        address: "Shillong, Meghalaya",
        img: "https://rikynjai.com/wp-content/uploads/2022/02/image04-1024x684.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Hotel Polo Towers",
        address: "Shillong, Meghalaya",
        img: "https://res.cloudinary.com/simplotel/image/upload/x_366,y_0,w_2868,h_2151,r_0,c_crop,q_80,fl_progressive/w_1350,f_auto,c_fit/hotel-polo-towers-shillong/Exterior_view_of_our_hotel_in_Shillong,_Hotel_Polo_Towers,_Shillong-_23",
      },
      {
        hid: 3,
        star: "7star",
        name: "Royal Heritage Tripura Castle",
        address: "Shillong, Meghalaya",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163084842.jpg?k=4df76dc193aee18423ae00a52377abc9ac62b3ea5c6455d869bb4f68ab174f97&o=&hp=1",
      },
    ],
  },

  // Sydney, Australia
  {
    id: 4,
    pname: "Sydney, Australia",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Sydney Opera House",
        des: "The iconic Sydney Opera House is a must-visit attraction.",
        img: "https://media.architecturaldigest.com/photos/63d82d299dd44a3242d15ade/16:9/w_2580,c_limit/GettyImages-982774858.jpg",
      },
      {
        mvid: 2,
        mvname: "Bondi Beach",
        des: "Bondi Beach is one of the most famous beaches in Australia.",
        img: "https://sandee.com/_next/image?url=https%3A%2F%2Fcdn.sandee.com%2F88448_1650_1100.avif&w=3840&q=75",
      },
      {
        mvid: 3,
        mvname: "Sydney Harbour Bridge",
        des: "The Sydney Harbour Bridge is another architectural wonder in the city.",
        img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/99/33.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Qantas",
        img: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/B53AZDMCYFJNTJZD4Z2O5WQYIA.jpg",
      },
      {
        airId: 2,
        airlineName: "Virgin Australia",
        img: "https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2023/07/virgin-australia-family-day-aircraft-10.jpeg",
      },
      {
        airId: 3,
        airlineName: "Emirates",
        img: "https://static.tnn.in/thumb/msid-110191238,thumbsize-94462,width-1280,height-720,resizemode-75/110191238.jpg?quality=100",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Ibis Sydney Darling Harbour",
        address: "70 Murray St, Sydney NSW 2000, Australia",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510057946.jpg?k=3361d9aed30378eeb9a29ffbb9c496c7f50751a9bed466311ca96a38c39a934a&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Langham Sydney",
        address: "89-113 Kent St, Millers Point NSW 2000, Australia",
        img: "https://i0.wp.com/luxlifelondon.com/wp-content/uploads/2018/07/langham-hotel-sydney.jpg?w=1440&ssl=1",
      },
      {
        hid: 3,
        star: "7star",
        name: "Park Hyatt Sydney",
        address: "7 Hickson Rd, The Rocks NSW 2000, Australia",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/110320486.jpg?k=955031d0524916a6114a2657b44d9469b49d195bd22fcdf6b46bb1405653d06d&o=&hp=1",
      },
    ],
  },

  // New York, USA
  {
    id: 5,
    pname: "New York, USA",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Statue of Liberty",
        des: "The Statue of Liberty is an iconic symbol of freedom and democracy.",
        img: "https://www.statueoflibertytour.com/wp-content/uploads/2022/05/statue-of-liberty-gaffb1612d_1920.jpg",
      },
      {
        mvid: 2,
        mvname: "Central Park",
        des: "Central Park is a massive park in the heart of Manhattan, perfect for a stroll.",
        img: "https://www.introducingnewyork.com/f/estados-unidos/nueva-york/guia/central-park.jpg",
      },
      {
        mvid: 3,
        mvname: "Times Square",
        des: "Times Square is known for its bright lights and bustling atmosphere.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Delta Airlines",
        img: "https://www.aerospacemanufacturinganddesign.com/remote/aHR0cHM6Ly9naWVjZG4uYmxvYi5jb3JlLndpbmRvd3MubmV0L2ZpbGV1cGxvYWRzL2ltYWdlLzIwMjQvMDEvMTIvYTM1MC0xMDAwLWFpcmJ1cy1zYXMtc3pkLmpwZw.lM1Hv0qIFDA.jpg?w=948&h=533&format=webp&mode=pad&anchor=middlecenter&scale=both&bgcolor=F0F1F2",
      },
      {
        airId: 2,
        airlineName: "American Airlines",
        img: "https://www.traveldailynews.com/wp-content/uploads/2024/01/American-Airlines.jpg",
      },
      {
        airId: 3,
        airlineName: "United Airlines",
        img: "https://content.r9cdn.net/rimg/dimg/4d/82/22da4bd1-al-UA-14fe0f1a618.jpg?width=1366&height=768&xhint=779&yhint=675&crop=true",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Pod 39 Hotel",
        address: "145 E 39th St, New York, NY 10016, USA",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/57/2e/ef/pod-39-hotel.jpg?w=700&h=-1&s=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "The NoMad Hotel",
        address: "1170 Broadway, New York, NY 10001, USA",
        img: "https://media.fastly.sohohousedigital.com/w_2700,h_1800/t_dc_base/sitecore-prod/ned/homepage/heroslides/nedny_0072/the_ned-_nomad_exterior_cropped.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "The St. Regis New York",
        address: "2 E 55th St at 5th Ave, New York, NY 10022, USA",
        img: "https://cache.marriott.com/is/image/marriotts7prod/nycxr-exterior-1674:Feature-Hor?wid=1920&fit=constrain",
      },
    ],
  },

  // Paris, France
  {
    id: 6,
    pname: "Paris, France",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Eiffel Tower",
        des: "The Eiffel Tower is a global cultural icon of France and one of the most recognizable structures in the world.",
        img: "https://media.architecturaldigest.com/photos/631f40a0b54052d450d2bc7c/master/pass/GettyImages-627393180.jpg",
      },
      {
        mvid: 2,
        mvname: "Louvre Museum",
        des: "The Louvre Museum is the world's largest art museum and a historic monument in Paris.",
        img: "https://d1oh8rexu2jve5.cloudfront.net/cache/img/e3c9333fa77d237066be0417dad54a5325f87bea-e3c933-1024-383-landscape.jpeg?q=1693264740",
      },
      {
        mvid: 3,
        mvname: "Notre-Dame Cathedral",
        des: "Notre-Dame Cathedral is a medieval Catholic cathedral and a masterpiece of French Gothic architecture.",
        img: "https://cdn.britannica.com/29/255529-050-63A22A3C/notre-dame-de-paris-cathedral-paris-france.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air France",
        img: "https://corporate.airfrance.com/_next/image?url=https%3A%2F%2Fapi.corporate.airfrance.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcrop_large_16_9%2Fpublic%2Fmedia-image%2F16052023_air_france_act_bilan_carbone_a220.jpg%3Fh%3D7e6a6741%26itok%3D9_4vV1W3&w=3840&q=75",
      },
      {
        airId: 2,
       airlineName:"Vistara",
          img:"https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2022/01/6.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
      },
      {
        airId: 3,
        airlineName: "British Airways",
        img: "https://mediacentre.britishairways.com/contents/archives/216/86/images/thumb1280x1683_width/dsc_0005_1638b_thumb.jpg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hôtel des Grands Boulevards",
        address: "17 Boulevard Montmartre, 75002 Paris, France",
        img: "https://media.dayuse.com/hotels/9897/2de7820a5b12017d658d87dcde95ba9c-hotel-des-grands-boulevards.jpg?frz-w=3840&frz-fit=cover",
      },
      {
        hid: 2,
        star: "5star",
        name: "Le Meurice",
        address: "228 Rue de Rivoli, 75001 Paris, France",
        img: "https://c8.alamy.com/comp/CC0X5H/hotel-le-meurice-rue-rivoli-street-paris-france-CC0X5H.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "The Ritz Paris",
        address: "15 Place Vendôme, 75001 Paris, France",
        img: "https://www.telegraph.co.uk/content/dam/Travel/hotels/2024/july/ritz-paris-hotel-facade-image-thumbnail.jpg",
      },
    ],
  },

  // Greece, Europe
  {
    id: 7,
    pname: "Greece, Europe",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Acropolis of Athens",
        des: "The Acropolis of Athens is an ancient citadel on a rocky outcrop above the city.",
        img: "https://cdn.britannica.com/53/150953-050-2E0836EB/Parthenon-Acropolis-Athens.jpg",
      },
      {
        mvid: 2,
        mvname: "Santorini",
        des: "Santorini is known for its stunning sunsets, whitewashed buildings, and blue domes.",
        img: "https://lp-cms-production.imgix.net/2024-06/iStock-166471469.jpg?fit=crop&w=3840&auto=format&q=75",
      },
      {
        mvid: 3,
        mvname: "Delphi",
        des: "Delphi was once considered the center of the world in ancient Greek mythology.",
        img: "https://v9c9u8s9.rocketcdn.me/wp-content/uploads/2020/11/delphi-cover.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "British Airways",
        img: "https://mediacentre.britishairways.com/contents/archives/216/86/images/thumb1280x1683_width/dsc_0005_1638b_thumb.jpg",
      
      },
      {
        airId: 2,
        airlineName: "Ethiad Airways",
        img: "https://blog.jobxdubai.com/wp-content/uploads/2024/05/0x0.webp",
      },
      {
        airId: 3,
        airlineName: "Air Canada",
        img: "https://www.travelandtourworld.com/wp-content/uploads/2022/09/Air-Canada-1.jpg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Athens Center Square Hotel",
        address: "15 Eolou, Athina 105 52, Greece",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/25/d1/4b/20170717-100256-largejpg.jpg?w=1200&h=-1&s=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "Hotel Grande Bretagne",
        address: "1 Vasileos Georgiou A' str., 105 64 Athens, Greece",
        img: "https://cache.marriott.com/content/dam/marriott-renditions/ATHLC/athlc-exterior-3367-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*",
      },
      {
        hid: 3,
        star: "7star",
        name: "Amanzoe",
        address: "Amanzoe Resort, 210 52, Kranidi, Greece",
        img: "https://dorsiatravel.com/wp-content/uploads/2023/09/20-09_Amanzoe-289-1.jpg",
      },
    ],
  },

  // Seoul, South Korea
  {
    id: 8,
    pname: "Seoul, South Korea",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Gyeongbokgung Palace",
        des: "Gyeongbokgung Palace is the main royal palace of the Joseon dynasty.",
        img: "https://ucarecdn.com/2667d034-3197-4c39-b162-579a4e2e583a/-/crop/1920x1007/0,72/-/resize/1200x630/-/resize/x300/",
      },
      {
        mvid: 2,
        mvname: "N Seoul Tower",
        des: "N Seoul Tower is a communication and observation tower located on Namsan Mountain.",
        img: "https://www.agoda.com/wp-content/uploads/2019/03/N-Seoul-Tower-Namsan-Cable-Car.jpg",
      },
      {
        mvid: 3,
        mvname: "Bukchon Hanok Village",
        des: "Bukchon Hanok Village is a traditional Korean village preserved to show a 600-year-old urban environment.",
        img: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/742953040-1704247244490.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "AirAsia",
        img: "https://walawalapictures.com/wp-content/uploads/2020/05/AirAsia_cabin_crew_04_Logo.jpg",
      },
      {
        airId: 2,
        airlineName: "Singapore Airlines",
        img: "https://s28477.pcdn.co/wp-content/uploads/2023/06/SIA_2023_Crew.jpg",
      },
      {
        airId: 3,
        airlineName: "Air Canada",
        img: "https://www.travelandtourworld.com/wp-content/uploads/2022/09/Air-Canada-1.jpg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Skypark Myeongdong 1",
        address: "12, Myeongdong 9-gil, Jung-gu, Seoul, South Korea",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/08/12/91/b9/hotel-skypark-myeongdong.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Park Hyatt Seoul",
        address: "606 Teheran-ro, Gangnam-gu, Seoul, South Korea",
        img: "https://www.jacadatravel.com/wp-content/uploads/2016/09/accommodation_photos__original_01_Park_Hyatt_Seoul_Exterior_with_SunsetWF.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Four Seasons Hotel Seoul",
        address: "97, Saemunan-ro, Jongno-gu, Seoul, South Korea",
        img: "https://www.theworlds50best.com/asia/en/filestore/jpg/four%20seasons%20header.jpg",
      },
    ],
  },
  
    

  ]


  ngOnInit(): void {
    // Extract the ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    
    // If the ID is valid (not null), assign it to currentId and find the matching schedule
    if (id !== null) {
      this.currentId = +id;
  
      // Find the schedule that matches the currentId
      this.selectedSchedule = this.scheduledetails.find((schedule: any) => schedule.id === this.currentId);
      // console.log(this.selectedSchedule);
      
    }
      // If the schedule exists, use it, otherwise handle the error case
    //   if (this.selectedSchedule) {
    //     console.log('Schedule found:', this.selectedSchedule);
    //   } else {
    //     console.error('Schedule not found for id:', this.currentId);
    //   }
    // } else {
    //   console.error('ID is null');
    // }
  }
  

booking()
{
  this.router.navigate(['/booking'], {
    queryParams: { 
      id: this.selectedSchedule.id,
      pname: this.selectedSchedule.pname,
      hotel: JSON.stringify(this.selectedSchedule.hotel),
      airlines:JSON.stringify(this.selectedSchedule.airlines),
    }
  });
  // console.log(this.selectedSchedule.hotel);
  
}
}
