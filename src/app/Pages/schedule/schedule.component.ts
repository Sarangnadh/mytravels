import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  {
    id: 9,
    pname: "Spain, Europe",
    mustvisit: [
      {
        mvid: 1,
        mvname: "La Sagrada Familia",
        des: "La Sagrada Familia is an iconic basilica designed by architect Antoni Gaudí in Barcelona.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Barcelona_Sagrada_Familia_06.jpg/640px-Barcelona_Sagrada_Familia_06.jpg",
      },
      {
        mvid: 2,
        mvname: "Park Güell",
        des: "Park Güell is a public park in Barcelona filled with stunning architectural elements designed by Gaudí.",
        img: "https://www.filmmakermagazine.com/wp-content/uploads/2020/09/Park_G%C3%BCell.jpg",
      },
      {
        mvid: 3,
        mvname: "The Alhambra",
        des: "The Alhambra is a palace and fortress complex in Granada, Spain, showcasing Islamic architecture.",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Alhambra_Banjara_Fortress.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "British Airways",
        img: "https://www.britishairways.com/assets/images/global/logo_britishairways.png",
      },
      {
        airId: 2,
        airlineName: "Air Europa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Air_Europa_Logo.svg/1200px-Air_Europa_Logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "Iberia",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Iberia_new_logo.svg/1024px-Iberia_new_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Regina",
        address: "Calle Alcalá, 19, Madrid, Spain",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/314340276.jpg?k=f992be6f9c2c6266277efee19e39fcf774e3d91e7e8de14d4cc0844aa7594f0b&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "Mandarin Oriental Ritz",
        address: "Plaza de la Lealtad 5, Madrid, Spain",
        img: "https://www.mandarinoriental.com/-/media/mo-hotels/corporate/hotels/madrid/exterior/mandarin-oriental-ritz-madrid-exterior-05.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Marbella Club Hotel",
        address: "Bulevar Principe Alfonso von Hohenlohe, s/n, Marbella, Spain",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/fc/2d/04/marbella-club-hotel.jpg?w=700&h=500&s=1",
      },
    ],
  },
  {
    id: 10,
    pname: "Jaipur, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Amber Fort",
        des: "Amber Fort is a magnificent palace located on a hilltop overlooking Maota Lake.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg/375px-20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg",
      },
      {
        mvid: 2,
        mvname: "Hawa Mahal",
        des: "Hawa Mahal, also known as the 'Palace of Winds', is a beautiful structure built with red and pink sandstone.",
        img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSgJ4Yw71uY4OTQ1wK5RdAll0AtxzWko7jSfoxl5kyxvISLPLZIIgGlDc3_f_eLWvAQ49LVeeQc3TC1l9hqP7DGfuBLqFW5a-JbhXBbab4",
      },
      {
        mvid: 3,
        mvname: "City Palace",
        des: "City Palace is a royal residence that showcases a blend of Mughal and Rajput architecture.",
        img: "https://lh5.googleusercontent.com/p/AF1QipNrso0Rt9hap_Hu1doMpVUSaRHDIcdKBvgapHVo=w357-h240-n-k-no",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://aviationa2z.com/wp-content/uploads/2022/06/150914-airindia.jpg",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://www.logisticsinsider.in/wp-content/uploads/2023/06/a321-2022-06-1512_17_35.png.e26741c6b1fcd103955c136c8f868c97-1536x864-1.png",
      },
      {
        airId: 3,
        airlineName: "Vistara",
        img: "https://www.livemint.com/lm-img/img/2024/08/14/1600x900/2-0-667156518-vistara2-0_1680246328850_1723627811221.JPG",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Pearl Palace",
        address: "51, Hathroi Fort, Hari Kishan Somani Marg, Jaipur, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254753090.jpg?k=2fda2a725a9b04c7be603fb07533b1e0a1974cf1a78638b8b70fcedd2a1e5006&o=&hp=1",
      },
      {
        hid: 2,
        star: "7star",
        name: "Rambagh Palace",
        address: "Bhawani Singh Rd, Rambagh, Jaipur, India",
        img: "https://images.herzindagi.info/image/2023/May/rambagh-palace-in-jaipur-worlds-best-hotel.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Rajmahal Palace",
        address: "Sardar Patel Marg, C Scheme, Jaipur, India",
        img: "data:image/jpeg;base64,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",
      },
    ],
  },
  {
    id: 11,
    pname: "Kerala, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Alleppey Backwaters",
        des: "Alleppey, known for its serene backwaters, offers a tranquil houseboat experience.",
        img: "https://www.keralatourism.org/images/enchanting_kerala/large/alleppey_backwaters20190311105354_421_1.jpg",
      },
      {
        mvid: 2,
        mvname: "Munnar Tea Gardens",
        des: "Munnar's picturesque tea plantations are a must-visit for nature lovers.",
        img: "https://www.keralatourism.org/images/enchanting_kerala/large/munnar_tea_plantations_3_large.jpg",
      },
      {
        mvid: 3,
        mvname: "Kumarakom Bird Sanctuary",
        des: "A haven for birdwatchers, Kumarakom Bird Sanctuary is home to numerous bird species.",
        img: "https://www.keralatourism.org/images/microsites/Kumarakom-Bird-Sanctuary-Kottayam.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://preview.redd.it/more-pics-of-the-air-india-a320-neo-in-the-new-livery-being-v0-5642sogf4k7d1.png?width=1080&crop=smart&auto=webp&s=8bfd97f6b5d66a5ada516c9f951867aefa334e6f",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/SpiceJet_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Coconut Lagoon",
        address: "Kumarakom, Kerala, India",
        img: "https://www.cghearth.com/images/coconutlagoon/rooms.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Leela Kovalam",
        address: "Kovalam Beach, Kerala, India",
        img: "https://www.theleela.com/-/media/leela/kovalam-gallery/accommodation/kovalam-accommodation1.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Taj Bekal Resort & Spa",
        address: "Bekal, Kerala, India",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/TajBekal/taj-bekal-resort-overview.jpg",
      },
    ],
  },
  {
    id: 12,
    pname: "Manali, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Rohtang Pass",
        des: "Rohtang Pass is a high mountain pass offering scenic views and adventure activities.",
        img: "https://www.tripsavvy.com/thmb/4Z-3swWngedDkkWBNg4YpzTn8dE=/2121x1193/smart/filters:no_upscale()/GettyImages-607917738-59d8c34c58e6de00114e9f63.jpg",
      },
      {
        mvid: 2,
        mvname: "Solang Valley",
        des: "A popular destination for adventure sports like paragliding and skiing.",
        img: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1392927588_20190829142018.jpg",
      },
      {
        mvid: 3,
        mvname: "Hadimba Temple",
        des: "Hadimba Temple is an ancient temple located amidst dense forests.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hadimba_Temple_Manali.jpg/640px-Hadimba_Temple_Manali.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/06/18093850/Air-India-A320-Neo-1-1600x900.jpg",
      },
      {
        airId: 2,
        airlineName: "GoAir",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Go_First_Logo.svg/1200px-Go_First_Logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "The Orchard Greens",
        address: "Log Huts Area, Manali, India",
        img: "https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201603201625166827-a08c7c5f8b26fd31c08db68866e1ca69.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Himalayan",
        address: "Hadimba Road, Manali, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/271137352.jpg?k=c5cf58aaf73fa02c9a75d0284d2e05ef0cd91fa7e7395a9f7f0cf7c5ca5b4e5b&o=&hp=1",
      },
      {
        hid: 3,
        star: "7star",
        name: "Span Resort & Spa",
        address: "Kullu-Manali Highway, Manali, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/17/ee/0d/b7/span-resort-spa.jpg",
      },
    ],
  },
  {
    id: 13,
    pname: "Varanasi, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Kashi Vishwanath Temple",
        des: "One of the most sacred temples in India dedicated to Lord Shiva.",
        img: "https://www.indiatourismguide.in/wp-content/uploads/2020/11/Kashi-Vishwanath-Temple-Varanasi.jpg",
      },
      {
        mvid: 2,
        mvname: "Dashashwamedh Ghat",
        des: "A famous ghat on the Ganges River, known for its evening aarti ceremony.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Varanasi_Dashashwamedh_Ghat.jpg/640px-Varanasi_Dashashwamedh_Ghat.jpg",
      },
      {
        mvid: 3,
        mvname: "Sarnath",
        des: "A significant Buddhist site where Lord Buddha gave his first sermon.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sarnath_Museum%2C_Maha_Bodhi_Society_Temple%2C_Varanasi_-_General_view_-_20150312_6258.jpg/640px-Sarnath_Museum%2C_Maha_Bodhi_Society_Temple%2C_Varanasi_-_General_view_-_20150312_6258.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://aviationa2z.com/wp-content/uploads/2024/04/image-46.png",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://www.logisticsinsider.in/wp-content/uploads/2023/06/a321-2022-06-1512_17_35.png.e26741c6b1fcd103955c136c8f868c97-1536x864-1.png",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://swarajya.gumlet.io/swarajya/2019-04/98546670-4261-4e86-b404-c8441f111254/800px_SpiceJet_aircraft_at_Varanasi_Airport.jpg?w=610&q=50&compress=true&format=auto",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Ganpati Guest House",
        address: "D-3/24 Meer Ghat, Varanasi, India",
        img: "https://www.tripadvisor.com/Media/Photo-o/13/18/4c/99/ganpati-guest-house.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Taj Ganges",
        address: "Nadesar Palace Grounds, Varanasi, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/188982716.jpg?k=a205e4517404e9266bc2d003e93ae9d7b5ea57e6890be3f4a1e02d5cb29c60be&o=&hp=1",
      },
      {
        hid: 3,
        star: "7star",
        name: "Brijrama Palace",
        address: "Munshi Ghat, Varanasi, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/15/4d/ed/99/brijrama-palace.jpg",
      },
    ],
  },
  {
    id: 14,
    pname: "Mumbai, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Gateway of India",
        des: "An iconic symbol of Mumbai, overlooking the Arabian Sea.",
        img: "https://media.assettype.com/freepressjournal/2022-08/12a01248-6be2-4fc9-8650-8e9bcdeda002/Gateway_of_India_1.jpg",
      },
      {
        mvid: 2,
        mvname: "Marine Drive",
        des: "A picturesque 3.6 km boulevard along the coast, perfect for an evening stroll.",
        img: "https://www.holidify.com/images/cmsuploads/compressed/Marine-Drive-Bombay_20181201180858.jpg",
      },
      {
        mvid: 3,
        mvname: "Chhatrapati Shivaji Maharaj Terminus",
        des: "A UNESCO World Heritage site and an architectural marvel.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Chhatrapati_Shivaji_Terminus%2C_Mumbai.jpg/640px-Chhatrapati_Shivaji_Terminus%2C_Mumbai.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-62768,resizemode-75,msid-97971767/industry/transportation/airlines-/-aviation/air-india-places-orders-for-840-planes-including-option-to-buy-370-aircraft-says-official.jpg",
      },
      {
        airId: 2,
        airlineName: "Vistara",
        img: "https://www.airvistara.com/content/dam/airvistara/global/english/home-page/extras/vistara-select-2.webp",
      },
      {
        airId: 3,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Marine Plaza",
        address: "Marine Drive, Mumbai, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/19384532.jpg?k=ad76ff624e6c89b5d16594c1a60ae835bb62e4fcce9f6f4f9a0d260df27be5e3&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "Taj Mahal Palace",
        address: "Apollo Bunder, Mumbai, India",
        img: "https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/20211029162657748-bf390ac5f37611e8a2ff0242ac110002.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "The Oberoi",
        address: "Nariman Point, Mumbai, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/01/9a/d7/25/the-oberoi-mumbai.jpg",
      },
    ],
  },
  {
    id: 15,
    pname: "Leh-Ladakh, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Pangong Lake",
        des: "A serene lake with breathtaking blue waters that change color.",
        img: "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/01/Pangong-Lake.jpg",
      },
      {
        mvid: 2,
        mvname: "Leh Palace",
        des: "A former royal palace offering panoramic views of the surrounding landscape.",
        img: "https://www.holidify.com/images/compressed/3030.jpg",
      },
      {
        mvid: 3,
        mvname: "Magnetic Hill",
        des: "A mysterious spot where vehicles appear to defy gravity.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Magnetic_Hill_Ladakh.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "GoAir",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Go_First_Logo.svg/1200px-Go_First_Logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/SpiceJet_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Singge Palace",
        address: "Old Fort Road, Leh, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/234653558.jpg?k=8b5e022446c282f9b87bb97f78afad96707a50810ef60bb00f403a35c917ea7d&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Grand Dragon",
        address: "Sheynam, Leh, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/05/8e/a6/ff/the-grand-dragon-ladakh.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Chamba Camp Thiksey",
        address: "Thiksey Monastery, Ladakh, India",
        img: "https://www.coxandkings.co.uk/getattachment/522c6be5-7b2c-4535-9dd3-faff4e155d9d/Exclusive-To-C-K-Luxury-Tents.aspx",
      },
    ],
  },
  {
    id: 16,
    pname: "Rishikesh, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Lakshman Jhula",
        des: "A suspension bridge across the Ganges River, famous for its views and mythology.",
        img: "https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg",
      },
      {
        mvid: 2,
        mvname: "Parmarth Niketan",
        des: "A spiritual institution on the banks of the Ganges, offering yoga and meditation.",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Parmarth_Niketan_Ashram_Rishikesh.JPG",
      },
      {
        mvid: 3,
        mvname: "Neer Garh Waterfall",
        des: "A scenic waterfall that offers a peaceful escape and short hikes.",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/05/cf/5e/19/neer-garh-waterfall.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/SpiceJet_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Divine Ganga Cottage",
        address: "Lakshman Jhula Road, Rishikesh, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/159101185.jpg?k=c8052ae7cc6b0e003d0d4e98ba8826c510b98195c278e7c8dbbbd4fc98e83ca4&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "Ananda in the Himalayas",
        address: "Narendra Nagar, Rishikesh, India",
        img: "https://www.anandaspa.com/wp-content/uploads/2017/06/exterior3.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Taj Rishikesh Resort & Spa",
        address: "Singthali, Rishikesh, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/194049952.jpg?k=8f94cc17b758d0c6cb46ff2a7f72c00351bb7ebdf58f8cc7bb292617047c3261&o=&hp=1",
      },
    ],
  },
  {
    id: 17,
    pname: "Darjeeling, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Tiger Hill",
        des: "Famous for its sunrise views over Kanchenjunga, the world's third-highest peak.",
        img: "https://media1.thrillophilia.com/filestore/ahq9p5mq6ch61uax9kjtgexptw2j_1549116653_tiger-hill.jpg?w=800&h=450&dpr=2.0",
      },
      {
        mvid: 2,
        mvname: "Darjeeling Himalayan Railway",
        des: "A UNESCO World Heritage site, known for its charming steam locomotives.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Darjeeling_Himalayan_Railway_%28Toy_Train%29.jpg/640px-Darjeeling_Himalayan_Railway_%28Toy_Train%29.jpg",
      },
      {
        mvid: 3,
        mvname: "Batasia Loop",
        des: "A spiral railway track that offers panoramic views of the hills.",
        img: "https://www.holidify.com/images/cmsuploads/compressed/4425.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/SpiceJet_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel New Elgin",
        address: "18, H.D.Lama Road, Darjeeling, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/194558156.jpg?k=84eaa1acbfc3538f76b9e35ab5f01b8059f82e2f8856e5e4df0a7c3e98b5eae7&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "Mayfair Darjeeling",
        address: "A.T. Road, Darjeeling, India",
        img: "https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/20211029162657748-bf390ac5f37611e8a2ff0242ac110002.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "The Glenburn Tea Estate",
        address: "Glenburn Tea Estate, Darjeeling, India",
        img: "https://cdn.britannica.com/56/153356-050-49C8EB71/Glenburn-Tea-Estate-Darjeeling-India.jpg",
      },
    ],
  },
  {
    id: 18,
    pname: "Andaman & Nicobar Islands, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Havelock Island",
        des: "Known for its stunning beaches and crystal-clear waters.",
        img: "https://static.wixstatic.com/media/d3a565_a0433264f7f341d6afbb8ac968965c3b~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d3a565_a0433264f7f341d6afbb8ac968965c3b~mv2.jpg",
      },
      {
        mvid: 2,
        mvname: "Radhanagar Beach",
        des: "Renowned for its beautiful sunsets and serene atmosphere.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Radhanagar_Beach%2C_Havelock_Island.jpg/640px-Radhanagar_Beach%2C_Havelock_Island.jpg",
      },
      {
        mvid: 3,
        mvname: "Cellular Jail",
        des: "A historic site that narrates the story of India's freedom struggle.",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Cellular_Jail_in_Port_Blair.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
      {
        airId: 2,
        airlineName: "Air India",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/SpiceJet_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Symphony Palms Beach Resort",
        address: "Havelock Island, Andaman, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/238582663.jpg?k=bf2c1ee7007ae73300914cd85c9704ee503c0d2351a9348b6a8266b768c0e405&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "Barefoot Resort",
        address: "Havelock Island, Andaman, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/18/f4/2f/8f/barefoot-dive-resort.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Taj Exotica Resort & Spa",
        address: "Nagar, Andaman, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/18/d4/17/4a/taj-exotica-resort-and-spa.jpg",
      },
    ],
  },
  {
    id: 19,
    pname: "Udaipur, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "City Palace",
        des: "A magnificent palace complex offering stunning views of Lake Pichola.",
        img: "https://www.holidify.com/images/cmsuploads/compressed/6856.jpg",
      },
      {
        mvid: 2,
        mvname: "Lake Pichola",
        des: "A picturesque lake known for its boat rides and scenic beauty.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lake_Pichola_Udaipur.jpg/640px-Lake_Pichola_Udaipur.jpg",
      },
      {
        mvid: 3,
        mvname: "Jag Mandir",
        des: "An island palace that is a perfect spot for a romantic outing.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Jag_Mandir.jpg/640px-Jag_Mandir.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/SpiceJet_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Hilltop Palace",
        address: "Near Fateh Sagar Lake, Udaipur, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/206496589.jpg?k=7bc1f96c05c90c55af12be26e394ad4e75f193b672261d564f8b4ff6b7f3b26f&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Leela Palace",
        address: "Lake Pichola, Udaipur, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/20/64/e2/d6/the-leela-palace-udaipur.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "Taj Lake Palace",
        address: "Lake Pichola, Udaipur, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/16/12/9d/58/taj-lake-palace-udaipur.jpg",
      },
    ],
  },
  {
    id: 20,
    pname: "Agra, India",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Taj Mahal",
        des: "A UNESCO World Heritage site, renowned as a symbol of love.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Taj_Mahal_in_March_2017.jpg/640px-Taj_Mahal_in_March_2017.jpg",
      },
      {
        mvid: 2,
        mvname: "Agra Fort",
        des: "A massive fort with impressive architecture and history.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Agra_Fort_02.jpg/640px-Agra_Fort_02.jpg",
      },
      {
        mvid: 3,
        mvname: "Mehtab Bagh",
        des: "A beautiful garden across the Yamuna River with stunning views of the Taj Mahal.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mehtab_Bagh_park_with_view_of_Taj_Mahal.jpg/640px-Mehtab_Bagh_park_with_view_of_Taj_Mahal.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Air India",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "IndiGo",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/IndiGo_airline_logo.svg",
      },
      {
        airId: 3,
        airlineName: "SpiceJet",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/SpiceJet_logo.svg",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Taj Plaza",
        address: "Fatehabad Rd, Agra, India",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/185065569.jpg?k=8c5a8f4d493436e2dc1f4c80c27515e7e6a1e9b7f186028a67361939b843536d&o=&hp=1",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Oberoi Amarvilas",
        address: "Taj East Gate Rd, Agra, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/16/0a/f4/c2/the-oberoi-amarvilas.jpg",
      },
      {
        hid: 3,
        star: "7star",
        name: "ITC Mughal",
        address: "Mughal Rd, Agra, India",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/18/44/b5/3d/itc-mughal.jpg",
      },
    ],
  },
  {
    id: 21,
    pname: "London, UK",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Big Ben",
        des: "Iconic clock tower located at the north end of the Palace of Westminster.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Big_Ben_and_the_Houses_of_Parliament_%28cropped%29.jpg/640px-Big_Ben_and_the_Houses_of_Parliament_%28cropped%29.jpg",
      },
      {
        mvid: 2,
        mvname: "London Eye",
        des: "A giant Ferris wheel offering spectacular views of the city.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/London_Eye_2010.jpg/640px-London_Eye_2010.jpg",
      },
      {
        mvid: 3,
        mvname: "Buckingham Palace",
        des: "The official residence of the British monarch.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Buckingham_Palace%2C_London_-_September_2023.jpg/640px-Buckingham_Palace%2C_London_-_September_2023.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "British Airways",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/British_Airways_logo_2013.svg/1200px-British_Airways_logo_2013.svg.png",
      },
      {
        airId: 2,
        airlineName: "Virgin Atlantic",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Virgin_Atlantic_logo.svg/1200px-Virgin_Atlantic_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "easyJet",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/EasyJet_logo.svg/1200px-EasyJet_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "4star",
        name: "The Montague on the Gardens",
        address: "15 Montague St, London WC1B 5BJ, UK",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/10/73/a4/3f/montague-on-the-gardens.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Ritz London",
        address: "150 Piccadilly, St. James's, London W1J 9BR, UK",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/1a/87/3d/the-ritz-london.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "The Savoy",
        address: "Strand, London WC2R 0EZ, UK",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/15/5a/5e/the-savoy.jpg",
      },
    ],
  },
  {
    id: 22,
    pname: "Singapore",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Gardens by the Bay",
        des: "A futuristic park featuring the iconic Supertree Grove.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Gardens_by_the_Bay_Supertree_Grove.jpg/640px-Gardens_by_the_Bay_Supertree_Grove.jpg",
      },
      {
        mvid: 2,
        mvname: "Marina Bay Sands",
        des: "An integrated resort famous for its stunning architecture.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Marina_Bay_Sands%2C_Singapore_-_2010.jpg/640px-Marina_Bay_Sands%2C_Singapore_-_2010.jpg",
      },
      {
        mvid: 3,
        mvname: "Sentosa Island",
        des: "A resort island with attractions like Universal Studios Singapore.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sentosa_Island_Singapore.jpg/640px-Sentosa_Island_Singapore.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Singapore Airlines",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Singapore_Airlines_logo.svg/1200px-Singapore_Airlines_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "SilkAir",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/SilkAir_logo.svg/1200px-SilkAir_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "Jetstar Asia",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Jetstar_Asia_Airlines_logo.svg/1200px-Jetstar_Asia_Airlines_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "4star",
        name: "Marina Bay Sands",
        address: "10 Bayfront Ave, Singapore 018956",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/01/2b/91/5f/marina-bay-sands.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Raffles Hotel",
        address: "1 Beach Rd, Singapore 189673",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/07/6a/99/5f/raffes-hotel.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "The Fullerton Hotel",
        address: "1 Fullerton Square, Singapore 049178",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/06/1c/63/5f/the-fullerton-hotel.jpg",
      },
    ],
  },
  {
    id: 23,
    pname: "Bangkok, Thailand",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Grand Palace",
        des: "The former royal residence, a stunning example of Thai architecture.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Grand_Palace%2C_Bangkok%2C_Thailand.jpg/640px-Grand_Palace%2C_Bangkok%2C_Thailand.jpg",
      },
      {
        mvid: 2,
        mvname: "Wat Pho",
        des: "Famous for the Reclining Buddha statue and traditional Thai massage.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wat_Pho_Buddha_Bangkok.jpg/640px-Wat_Pho_Buddha_Bangkok.jpg",
      },
      {
        mvid: 3,
        mvname: "Chatuchak Weekend Market",
        des: "One of the largest markets in the world, perfect for shopping.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chatuchak_Weekend_Market_Bangkok.jpg/640px-Chatuchak_Weekend_Market_Bangkok.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Thai Airways",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Thai_Airways_logo.svg/1200px-Thai_Airways_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "Bangkok Airways",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Bangkok_Airways_logo.svg/1200px-Bangkok_Airways_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "AirAsia",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/AirAsia_logo.svg/1200px-AirAsia_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "3star",
        name: "Hotel Muse Bangkok",
        address: "55/555 Langsuan Road, Bangkok 10330, Thailand",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/08/b5/73/8b/hotel-muse-bangkok.jpg",
      },
      {
        hid: 2,
        star: "4star",
        name: "Banyan Tree Bangkok",
        address: "21/100 South Sathon Road, Bangkok 10120, Thailand",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/79/0c/c2/banyan-tree-bangkok.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "The Sukhothai Bangkok",
        address: "13/3 South Sathorn Road, Bangkok 10120, Thailand",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/08/a8/a3/the-sukhothai-bangkok.jpg",
      },
    ],
  },
  {
    id: 24,
    pname: "Istanbul, Turkey",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Hagia Sophia",
        des: "A former Greek Orthodox basilica, later an imperial mosque, now a museum.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Hagia_Sophia_%28Ayasofya%29%2C_Istanbul%2C_Turkey.jpg/640px-Hagia_Sophia_%28Ayasofya%29%2C_Istanbul%2C_Turkey.jpg",
      },
      {
        mvid: 2,
        mvname: "Topkapi Palace",
        des: "A large museum that was the former palace of Ottoman sultans.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Topkapi_Palace%2C_Istanbul%2C_Turkey.jpg/640px-Topkapi_Palace%2C_Istanbul%2C_Turkey.jpg",
      },
      {
        mvid: 3,
        mvname: "Grand Bazaar",
        des: "One of the largest and oldest covered markets in the world.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Grand_Bazaar%2C_Istanbul%2C_Turkey.jpg/640px-Grand_Bazaar%2C_Istanbul%2C_Turkey.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Turkish Airlines",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Turkish_Airlines_logo.svg/1200px-Turkish_Airlines_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "Pegasus Airlines",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Pegasus_Airlines_logo.svg/1200px-Pegasus_Airlines_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "Atlasglobal",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Atlasglobal_logo.svg/1200px-Atlasglobal_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "4star",
        name: "Sirkeci Mansion",
        address: "Taya Hatun Sk. No:5, 34110 Fatih/İstanbul, Turkey",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1e/10/2c/c5/sirkeci-mansion.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Four Seasons Hotel Istanbul",
        address: "Tevkifhane Sk. No:1, 34110 Fatih/İstanbul, Turkey",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/69/59/54/four-seasons-hotel-istanbul.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "The Marmara Taksim",
        address: "Taksim Square, 34437 Istanbul, Turkey",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1e/cb/88/bb/the-marmara-taksim.jpg",
      },
    ],
  },
  {
    id: 25,
    pname: "Cairo, Egypt",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Pyramids of Giza",
        des: "The last of the Seven Wonders of the Ancient World still in existence.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pyramids_of_Giza_2015.jpg/640px-Pyramids_of_Giza_2015.jpg",
      },
      {
        mvid: 2,
        mvname: "The Sphinx",
        des: "A limestone statue of a reclining sphinx, a mythical creature.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/The_Sphinx_of_Giza_2015.jpg/640px-The_Sphinx_of_Giza_2015.jpg",
      },
      {
        mvid: 3,
        mvname: "Egyptian Museum",
        des: "Home to an extensive collection of ancient Egyptian antiquities.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Egyptian_Museum%2C_Cairo.jpg/640px-Egyptian_Museum%2C_Cairo.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "EgyptAir",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/EgyptAir_logo.svg/1200px-EgyptAir_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "Nile Air",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Nile_Air_logo.svg/1200px-Nile_Air_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "Air Cairo",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Air_Cairo_logo.svg/1200px-Air_Cairo_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "4star",
        name: "Le Meridien Pyramids Hotel",
        address: "El Remayah Sq, Pyramids, Giza, Egypt",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/2b/82/2f/2e/le-meridien-pyramids-hotel.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Marriott Mena House",
        address: "6 Pyramids Rd, Giza, Egypt",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/2a/88/89/1e/marriott-mena-house.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "Four Seasons Hotel Cairo",
        address: "35 Mohamed El Nasser St, Giza, Egypt",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/4b/3f/7a/3a/four-seasons-hotel.jpg",
      },
    ],
  },
  {
    id: 26,
    pname: "Phuket, Thailand",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Patong Beach",
        des: "The most popular beach in Phuket, known for its nightlife.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Patong_Beach_Phuket.jpg/640px-Patong_Beach_Phuket.jpg",
      },
      {
        mvid: 2,
        mvname: "Big Buddha",
        des: "A 45-meter-tall statue located atop Nakkerd Hill.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Big_Buddha%2C_Patong.jpg/640px-Big_Buddha%2C_Patong.jpg",
      },
      {
        mvid: 3,
        mvname: "Phang Nga Bay",
        des: "Famous for its limestone cliffs and emerald waters.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Phang_Nga_Bay_%282014%29.jpg/640px-Phang_Nga_Bay_%282014%29.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Thai Airways",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Thai_Airways_logo.svg/1200px-Thai_Airways_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "Bangkok Airways",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Bangkok_Airways_logo.svg/1200px-Bangkok_Airways_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "AirAsia",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/AirAsia_logo.svg/1200px-AirAsia_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "4star",
        name: "Amari Phuket",
        address: "2 Meun-Nai Road, Patong Beach, Phuket 83150, Thailand",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/1b/8e/7e/amari-phuket.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "The Slate",
        address: "Nai Yang Beach, 83110, Phuket, Thailand",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/64/93/0d/the-slate.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "The Surin Phuket",
        address: "115/5 Moo 3, Pansea Beach, Phuket, Thailand",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/87/6b/89/the-surin-phuket.jpg",
      },
    ],
  },
  {
    id: 27,
    pname: "Doha, Qatar",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Museum of Islamic Art",
        des: "A museum showcasing Islamic art from three continents.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Museum_of_Islamic_Art%2C_Doha.jpg/640px-Museum_of_Islamic_Art%2C_Doha.jpg",
      },
      {
        mvid: 2,
        mvname: "Souq Waqif",
        des: "A traditional market with a variety of shops and restaurants.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Souq_Waqif%2C_Doha.jpg/640px-Souq_Waqif%2C_Doha.jpg",
      },
      {
        mvid: 3,
        mvname: "The Pearl-Qatar",
        des: "An artificial island with luxurious residences and shops.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/The_Pearl-Qatar.jpg/640px-The_Pearl-Qatar.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Qatar Airways",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Qatar_Airways_logo.svg/1200px-Qatar_Airways_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "Air Qatar",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Air_Qatar_logo.svg/1200px-Air_Qatar_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "Gulf Air",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Gulf_Air_logo.svg/1200px-Gulf_Air_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "5star",
        name: "The Ritz-Carlton, Doha",
        address: "P.O. Box 23400, Doha, Qatar",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/25/9d/b5/the-ritz-carlton-doha.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Hilton Doha",
        address: "Diplomatic Area, Doha, Qatar",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/a1/57/5f/hilton-doha.jpg",
      },
      {
        hid: 3,
        star: "4star",
        name: "Marsa Malaz Kempinski, The Pearl",
        address: "The Pearl-Qatar, Doha, Qatar",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1e/02/77/78/marsa-malaz-kempinski.jpg",
      },
    ],
  },
  {
    id: 28,
    pname: "Barcelona, Spain",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Sagrada Familia",
        des: "A large Roman Catholic church designed by Antoni Gaudí.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sagrada_Familia%2C_Barcelona.jpg/640px-Sagrada_Familia%2C_Barcelona.jpg",
      },
      {
        mvid: 2,
        mvname: "Park Güell",
        des: "A public park filled with artistic structures designed by Antoni Gaudí.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Park_G%C3%BCell%2C_Barcelona.jpg/640px-Park_G%C3%BCell%2C_Barcelona.jpg",
      },
      {
        mvid: 3,
        mvname: "La Rambla",
        des: "A tree-lined street in the heart of Barcelona, known for its vibrant atmosphere.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/La_Rambla%2C_Barcelona.jpg/640px-La_Rambla%2C_Barcelona.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "Vueling Airlines",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Vueling_logo.svg/1200px-Vueling_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "Iberia",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Iberia_logo.svg/1200px-Iberia_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "Ryanair",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Ryanair_logo.svg/1200px-Ryanair_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "4star",
        name: "Hotel Arts Barcelona",
        address: "Carrer de la Marina, 19-21, 08005 Barcelona, Spain",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/16/4c/62/hotel-arts-barcelona.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "W Barcelona",
        address: "Plaça Rosa dels Vents, 1, 08039 Barcelona, Spain",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/2e/51/a5/w-barcelona.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "Mandarin Oriental, Barcelona",
        address: "Passeig de Gràcia, 38-40, 08007 Barcelona, Spain",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/48/9c/0e/mandarin-oriental-barcelona.jpg",
      },
    ],
  },
  {
    id: 29,
    pname: "Rio de Janeiro, Brazil",
    mustvisit: [
      {
        mvid: 1,
        mvname: "Christ the Redeemer",
        des: "An iconic statue of Jesus Christ overlooking the city.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Christ_the_Redeemer%2C_Rio_de_Janeiro.jpg/640px-Christ_the_Redeemer%2C_Rio_de_Janeiro.jpg",
      },
      {
        mvid: 2,
        mvname: "Sugarloaf Mountain",
        des: "A mountain with a peak that rises 396 meters above the harbor.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sugarloaf_Mountain%2C_Rio_de_Janeiro.jpg/640px-Sugarloaf_Mountain%2C_Rio_de_Janeiro.jpg",
      },
      {
        mvid: 3,
        mvname: "Copacabana Beach",
        des: "Famous beach known for its beauty and vibrant atmosphere.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Copacabana_Beach%2C_Rio_de_Janeiro.jpg/640px-Copacabana_Beach%2C_Rio_de_Janeiro.jpg",
      },
    ],
    airlines: [
      {
        airId: 1,
        airlineName: "LATAM Airlines",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/LATAM_Airlines_logo.svg/1200px-LATAM_Airlines_logo.svg.png",
      },
      {
        airId: 2,
        airlineName: "Gol Transportes Aéreos",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Gol_Transportes_Aéreos_logo.svg/1200px-Gol_Transportes_Aéreos_logo.svg.png",
      },
      {
        airId: 3,
        airlineName: "Azul Brazilian Airlines",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Azul_Airlines_logo.svg/1200px-Azul_Airlines_logo.svg.png",
      },
    ],
    hotel: [
      {
        hid: 1,
        star: "4star",
        name: "Windsor Excelsior Hotel",
        address: "Avenida Atlântica, 1700 - Copacabana, Rio de Janeiro - RJ, 22021-001, Brazil",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/68/f1/3c/windsor-excelsior-hotel.jpg",
      },
      {
        hid: 2,
        star: "5star",
        name: "Belmond Copacabana Palace",
        address: "Avenida Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001, Brazil",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0c/7f/c6/7e/belmond-copacabana-palace.jpg",
      },
      {
        hid: 3,
        star: "5star",
        name: "Hotel Fasano Rio de Janeiro",
        address: "Avenida Vieira Souto, 320 - Ipanema, Rio de Janeiro - RJ, 22420-000, Brazil",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/2c/cc/44/hotel-fasano-rio-de-janeiro.jpg",
      },
    ],
  },
  {
    id: 30,
    pname: "Vienna, Austria",
    mustvisit: [
        {
            mvid: 1,
            mvname: "Schönbrunn Palace",
            des: "Former imperial summer residence with beautiful gardens.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Schloss_Schoenbrunn%2C_Vienna_%28cropped%29.jpg/640px-Schloss_Schoenbrunn%2C_Vienna_%28cropped%29.jpg",
        },
        {
            mvid: 2,
            mvname: "St. Stephen's Cathedral",
            des: "Gothic cathedral located in the city center, known for its stunning architecture.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/St._Stephen%27s_Cathedral%2C_Vienna%2C_Austria.jpg/640px-St._Stephen%27s_Cathedral%2C_Vienna%2C_Austria.jpg",
        },
        {
            mvid: 3,
            mvname: "Belvedere Palace",
            des: "Baroque palace complex housing an extensive collection of Austrian art.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Belvedere_palace_in_Vienna.jpg/640px-Belvedere_palace_in_Vienna.jpg",
        },
    ],
    airlines: [
        {
            airId: 1,
            airlineName: "Austrian Airlines",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Austrian_Airlines_logo.svg/1200px-Austrian_Airlines_logo.svg.png",
        },
        {
            airId: 2,
            airlineName: "Ryanair",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Ryanair_logo.svg/1200px-Ryanair_logo.svg.png",
        },
        {
            airId: 3,
            airlineName: "Lufthansa",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Lufthansa_logo.svg/1200px-Lufthansa_logo.svg.png",
        },
    ],
    hotel: [
        {
            hid: 1,
            star: "5star",
            name: "The Ritz-Carlton, Vienna",
            address: "Schubertring 5-7, 1010 Wien, Austria",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/10/0a/5a/6a/the-ritz-carlton-vienna.jpg",
        },
        {
            hid: 2,
            star: "5star",
            name: "Palais Hansen Kempinski Vienna",
            address: "Schottenring 24, 1010 Wien, Austria",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/14/5c/8b/67/palais-hansen-kempinski.jpg",
        },
        {
            hid: 3,
            star: "5star",
            name: "Hotel Sacher Wien",
            address: "Philharmoniker Str. 4, 1010 Wien, Austria",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/12/61/92/7f/hotel-sacher-wien.jpg",
        },
    ],
},
{
    id: 31,
    pname: "Bali, Indonesia",
    mustvisit: [
        {
            mvid: 1,
            mvname: "Uluwatu Temple",
            des: "Clifftop temple famous for its stunning sunsets.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Uluwatu_Temple_%28cropped%29.jpg/640px-Uluwatu_Temple_%28cropped%29.jpg",
        },
        {
            mvid: 2,
            mvname: "Tegallalang Rice Terraces",
            des: "Stunning rice paddies known for their beautiful scenery.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Tegallalang_Rice_Terraces.jpg/640px-Tegallalang_Rice_Terraces.jpg",
        },
        {
            mvid: 3,
            mvname: "Sacred Monkey Forest Sanctuary",
            des: "Nature reserve and Hindu temple complex in Ubud.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ubud_Monkey_Forest%2C_Bali.jpg/640px-Ubud_Monkey_Forest%2C_Bali.jpg",
        },
    ],
    airlines: [
        {
            airId: 1,
            airlineName: "Garuda Indonesia",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Garuda_Indonesia_logo.svg/1200px-Garuda_Indonesia_logo.svg.png",
        },
        {
            airId: 2,
            airlineName: "Lion Air",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Lion_Air_Logo.svg/1200px-Lion_Air_Logo.svg.png",
        },
        {
            airId: 3,
            airlineName: "AirAsia",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/AirAsia_logo.svg/1200px-AirAsia_logo.svg.png",
        },
    ],
    hotel: [
        {
            hid: 1,
            star: "5star",
            name: "The Mulia",
            address: "Jl. Raya Nusa Dua Selatan, No. 10, Nusa Dua, Bali, Indonesia",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/11/20/a1/69/the-mulia.jpg",
        },
        {
            hid: 2,
            star: "5star",
            name: "Four Seasons Resort Bali at Sayan",
            address: "Sayan, Ubud, Bali, Indonesia",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/17/02/6b/44/four-seasons-resort-bali.jpg",
        },
        {
            hid: 3,
            star: "5star",
            name: "The St. Regis Bali Resort",
            address: "Kawasan Pariwisata, Nusa Dua, Bali, Indonesia",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/02/7d/55/54/the-st-regis-bali-resort.jpg",
        },
    ],
},
{
    id: 32,
    pname: "Dubai, UAE",
    mustvisit: [
        {
            mvid: 1,
            mvname: "Burj Khalifa",
            des: "The tallest building in the world, offering panoramic views of the city.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Burj_Khalifa_2016.jpg/640px-Burj_Khalifa_2016.jpg",
        },
        {
            mvid: 2,
            mvname: "Dubai Mall",
            des: "World's largest shopping mall with an aquarium and an ice rink.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Dubai_Mall_at_night.jpg/640px-Dubai_Mall_at_night.jpg",
        },
        {
            mvid: 3,
            mvname: "Palm Jumeirah",
            des: "Artificial archipelago famous for its luxury resorts.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Palm_Jumeirah%2C_Dubai_%28cropped%29.jpg/640px-Palm_Jumeirah%2C_Dubai_%28cropped%29.jpg",
        },
    ],
    airlines: [
        {
            airId: 1,
            airlineName: "Emirates",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Emirates_logo.svg/1200px-Emirates_logo.svg.png",
        },
        {
            airId: 2,
            airlineName: "Etihad Airways",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Etihad_Airways_logo.svg/1200px-Etihad_Airways_logo.svg.png",
        },
        {
            airId: 3,
            airlineName: "Air Arabia",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Air_Arabia_logo.svg/1200px-Air_Arabia_logo.svg.png",
        },
    ],
    hotel: [
        {
            hid: 1,
            star: "5star",
            name: "Burj Al Arab Jumeirah",
            address: "Jumeirah St, Dubai, UAE",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/11/c3/f8/a7/burj-al-arab.jpg",
        },
        {
            hid: 2,
            star: "5star",
            name: "Atlantis, The Palm",
            address: "Crescent Rd, The Palm Jumeirah, Dubai, UAE",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/07/70/38/05/atlantis-the-palm.jpg",
        },
        {
            hid: 3,
            star: "5star",
            name: "JW Marriott Marquis Hotel Dubai",
            address: "Sheikh Zayed Road, Dubai, UAE",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/15/b6/5a/c1/jw-marriott-marquis-hotel-dubai.jpg",
        },
    ],
},
{
    id: 33,
    pname: "Cape Town, South Africa",
    mustvisit: [
        {
            mvid: 1,
            mvname: "Table Mountain",
            des: "Iconic flat-topped mountain offering breathtaking views.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Table_Mountain_from_Devil%27s_Peak.jpg/640px-Table_Mountain_from_Devil%27s_Peak.jpg",
        },
        {
            mvid: 2,
            mvname: "Robben Island",
            des: "Historical site where Nelson Mandela was imprisoned.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Robben_Island_from_the_air.jpg/640px-Robben_Island_from_the_air.jpg",
        },
        {
            mvid: 3,
            mvname: "Cape of Good Hope",
            des: "Beautiful coastal area known for its stunning scenery.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cape_of_Good_Hope.jpg/640px-Cape_of_Good_Hope.jpg",
        },
    ],
    airlines: [
        {
            airId: 1,
            airlineName: "South African Airways",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/South_African_Airways_logo.svg/1200px-South_African_Airways_logo.svg.png",
        },
        {
            airId: 2,
            airlineName: "British Airways",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/British_Airways_logo.svg/1200px-British_Airways_logo.svg.png",
        },
        {
            airId: 3,
            airlineName: "Kulula",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Kulula_logo.svg/1200px-Kulula_logo.svg.png",
        },
    ],
    hotel: [
        {
            hid: 1,
            star: "5star",
            name: "One&Only Cape Town",
            address: "Dock Road, V&A Waterfront, Cape Town, South Africa",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/01/61/d7/54/one-only-cape-town.jpg",
        },
        {
            hid: 2,
            star: "5star",
            name: "The Silo Hotel",
            address: "Silo Square, V&A Waterfront, Cape Town, South Africa",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/13/9b/82/3e/the-silo-hotel.jpg",
        },
        {
            hid: 3,
            star: "5star",
            name: "Cape Grace Hotel",
            address: "West Quay Road, V&A Waterfront, Cape Town, South Africa",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/04/94/0b/c6/cape-grace.jpg",
        },
    ],
},
{
    id: 34,
    pname: "Rome, Italy",
    mustvisit: [
        {
            mvid: 1,
            mvname: "Colosseum",
            des: "Iconic ancient amphitheater and symbol of Rome.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/640px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
        },
        {
            mvid: 2,
            mvname: "Vatican City",
            des: "Home to St. Peter's Basilica and the Pope.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vatican_City.jpg/640px-Vatican_City.jpg",
        },
        {
            mvid: 3,
            mvname: "Pantheon",
            des: "Well-preserved ancient Roman temple with a stunning dome.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Pantheon%2C_Rome%2C_Italy.jpg/640px-Pantheon%2C_Rome%2C_Italy.jpg",
        },
    ],
    airlines: [
        {
            airId: 1,
            airlineName: "Alitalia",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Alitalia_logo.svg/1200px-Alitalia_logo.svg.png",
        },
        {
            airId: 2,
            airlineName: "Ryanair",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Ryanair_logo.svg/1200px-Ryanair_logo.svg.png",
        },
        {
            airId: 3,
            airlineName: "easyJet",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/EasyJet_logo.svg/1200px-EasyJet_logo.svg.png",
        },
    ],
    hotel: [
        {
            hid: 1,
            star: "5star",
            name: "Hotel de Russie",
            address: "Via del Boccaccio, 6, 00187 Roma RM, Italy",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/05/7a/3b/49/hotel-de-russie.jpg",
        },
        {
            hid: 2,
            star: "5star",
            name: "The St. Regis Rome",
            address: "Via Vittorio Emanuele Orlando, 3, 00185 Roma RM, Italy",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/00/43/48/83/the-st-regis-rome.jpg",
        },
        {
            hid: 3,
            star: "5star",
            name: "Rome Cavalieri, A Waldorf Astoria Hotel",
            address: "Via Alberto Cadlolo, 101, 00136 Roma RM, Italy",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/04/f4/90/81/rome-cavalieri-a-waldorf.jpg",
        },
    ],
},
{
    id: 35,
    pname: "Tokyo, Japan",
    mustvisit: [
        {
            mvid: 1,
            mvname: "Tokyo Tower",
            des: "Iconic communications tower with stunning city views.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tokyo_Tower_%28cropped%29.jpg/640px-Tokyo_Tower_%28cropped%29.jpg",
        },
        {
            mvid: 2,
            mvname: "Senso-ji Temple",
            des: "Tokyo's oldest temple, known for its historic significance.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Senso-ji_Temple.jpg/640px-Senso-ji_Temple.jpg",
        },
        {
            mvid: 3,
            mvname: "Shibuya Crossing",
            des: "Famous pedestrian crossing and lively city center.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Shibuya_Crossing.jpg/640px-Shibuya_Crossing.jpg",
        },
    ],
    airlines: [
        {
            airId: 1,
            airlineName: "All Nippon Airways (ANA)",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/All_Nippon_Airways_logo.svg/1200px-All_Nippon_Airways_logo.svg.png",
        },
        {
            airId: 2,
            airlineName: "Japan Airlines",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Japan_Airlines_logo.svg/1200px-Japan_Airlines_logo.svg.png",
        },
        {
            airId: 3,
            airlineName: "Peach Aviation",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Peach_Aviation_logo.svg/1200px-Peach_Aviation_logo.svg.png",
        },
    ],
    hotel: [
        {
            hid: 1,
            star: "5star",
            name: "The Peninsula Tokyo",
            address: "1-8-1 Yurakucho, Chiyoda City, Tokyo, Japan",
            img: "https://lh3.googleusercontent.com/p/AF1QipOqGy-qsWk6Mo5USax6CVioZJZaVEYwof1T0N70=s1360-w1360-h1020",
        },
        {
            hid: 2,
            star: "5star",
            name: "Mandarin Oriental Tokyo",
            address: "2-1-1 Nihonbashi Muromachi, Chuo City, Tokyo, Japan",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/16/25/72/93/mandarin-oriental-tokyo.jpg",
        },
        {
            hid: 3,
            star: "5star",
            name: "Shangri-La Hotel, Tokyo",
            address: "1-8-3 Marunouchi, Chiyoda City, Tokyo, Japan",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/06/d5/6a/0c/shangri-la-hotel-tokyo.jpg",
        },
    ],
},
{
    id: 36,
    pname: "Riyadh, Saudi Arabia",
    mustvisit: [
        {
            mvid: 1,
            mvname: "Kingdom Centre",
            des: "Iconic skyscraper with a sky bridge offering panoramic views.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Kingdom_Center_Riyadh.jpg/640px-Kingdom_Center_Riyadh.jpg",
        },
        {
            mvid: 2,
            mvname: "Masmak Fortress",
            des: "Historic fortress reflecting Saudi Arabia's rich heritage.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Masmak_Fortress_01.jpg/640px-Masmak_Fortress_01.jpg",
        },
        {
            mvid: 3,
            mvname: "National Museum of Saudi Arabia",
            des: "Museum showcasing Saudi Arabia's history and culture.",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/National_Museum_of_Saudi_Arabia.jpg/640px-National_Museum_of_Saudi_Arabia.jpg",
        },
    ],
    airlines: [
        {
            airId: 1,
            airlineName: "Saudi Arabian Airlines",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Saudi_Arabian_Airlines_logo.svg/1200px-Saudi_Arabian_Airlines_logo.svg.png",
        },
        {
            airId: 2,
            airlineName: "Flynas",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Flynas_logo.svg/1200px-Flynas_logo.svg.png",
        },
        {
            airId: 3,
            airlineName: "Nesma Airlines",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Nesma_Airlines_logo.svg/1200px-Nesma_Airlines_logo.svg.png",
        },
    ],
    hotel: [
        {
            hid: 1,
            star: "5star",
            name: "Ritz-Carlton Riyadh",
            address: "Al Hada Area, Riyadh, Saudi Arabia",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/04/7c/38/06/ritz-carlton-riyadh.jpg",
        },
        {
            hid: 2,
            star: "5star",
            name: "Four Seasons Hotel Riyadh",
            address: "Kingdom Centre, Riyadh, Saudi Arabia",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/14/90/77/16/four-seasons-hotel-riyadh.jpg",
        },
        {
            hid: 3,
            star: "5star",
            name: "Marriott Hotel Riyadh",
            address: "King Saud Rd, Riyadh, Saudi Arabia",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/13/d7/36/09/marriott-hotel-riyadh.jpg",
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
      mustvisit: JSON.stringify(this.selectedSchedule.mustvisit)
    }
  });
  // console.log(this.selectedSchedule.hotel);
  
}
}
