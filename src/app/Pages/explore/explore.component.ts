import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
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
    {
      id: 10,
      placename: "Jaipur, India",
      des: "Discover the Pink City, Jaipur, where royal palaces and vibrant bazaars narrate the grandeur of Rajasthan.",
      Img: "https://www.holidaymonk.com/wp-content/uploads/2022/03/Rajasthan.jpg",
      link: '/schedule/10'
    },
    {
      id: 11,
      placename: "Kerala, India",
      des: "Serenade yourself with Kerala's backwaters, lush greenery, and serene houseboats.",
      Img: "https://swastikholiday.com/blogs/img/images-5.jpg",
      link: '/schedule/11'
    },
    {
      id: 12,
      placename: "Manali, India",
      des: "Witness the majestic beauty of the Himalayas in Manali, a perfect getaway for nature and adventure lovers.",
      Img: "https://yowydh.infiniteuploads.cloud/2024/10/Tourist-Places-In-Manali.jpg",
      link: '/schedule/12'
    },
    {
      id: 13,
      placename: "Varanasi, India",
      des: "Explore the spiritual essence of India in Varanasi, where ancient rituals meet the flow of the Ganges.",
      Img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/be/17/41/caption.jpg?w=1200&h=700&s=1",
      link: '/schedule/13'
    },
    {
      id: 14,
      placename: "Mumbai, India",
      des: "Feel the energy of Mumbai, the city that never sleeps, where Bollywood dreams and colonial history merge.",
      Img: "https://media.assettype.com/freepressjournal/2022-08/12a01248-6be2-4fc9-8650-8e9bcdeda002/Gateway_of_India_1.jpg",
      link: '/schedule/14'
    },
    {
      id: 15,
      placename: "Leh-Ladakh, India",
      des: "Embrace the stark beauty of Leh-Ladakh, known for its rugged mountains, monasteries, and pristine lakes.",
      Img: "https://www.kashmirtourpackage.org/blog/wp-content/uploads/2024/01/Pangong-Lake.jpg",
      link: '/schedule/15'
    },
    {
      id: 16,
      placename: "Rishikesh, India",
      des: "Indulge in the spiritual and adventurous delights of Rishikesh, the yoga capital of the world.",
      Img: "https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg",
      link: '/schedule/16'
    },
    {
      id: 17,
      placename: "Darjeeling, India",
      des: "Sip on the world-famous Darjeeling tea amidst rolling hills and the majestic Kanchenjunga peak.",
      Img: "https://media1.thrillophilia.com/filestore/pq5s3qa3za1ixm6xqo212mbu5bo7_1549114730_shutterstock_400664158.jpg?w=753&h=450&dpr=2.0",
      link: '/schedule/17'
    },
    {
      id: 18,
      placename: "Andaman & Nicobar Islands, India",
      des: "Dive into the turquoise waters of the Andaman Islands, a paradise for beach lovers and scuba divers.",
      Img: "https://static.wixstatic.com/media/d3a565_a0433264f7f341d6afbb8ac968965c3b~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d3a565_a0433264f7f341d6afbb8ac968965c3b~mv2.jpg",
      link: '/schedule/18'
    },
    {
      id: 19,
      placename: "Udaipur, India",
      des: "Known as the City of Lakes, Udaipur offers royal palaces, serene waters, and a rich heritage.",
      Img: "https://taxirajasthan.in/manage/uploads/news_events/PLg4p3wiYl.png",
      link: '/schedule/19'
    },
    {
      id: 20,
      placename: "Agra, India",
      des: "Marvel at the iconic Taj Mahal in Agra, a symbol of eternal love and Mughal grandeur.",
      Img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/11/Agra-Red-Fort_26th-nov.jpg",
      link: '/schedule/20'
    },
    {
      id: 21,
      placename: "London, UK",
      des: "Explore London's iconic landmarks like Big Ben, the London Eye, and Buckingham Palace.",
      Img: "https://static.independent.co.uk/2023/06/16/15/iStock-1399934799.jpg",
      link: '/schedule/21'
    },
    {
      id: 22,
      placename: "Singapore",
      des: "Discover the modern marvels of Singapore, with its futuristic skyline and lush green spaces.",
      Img: "https://www.thoughtco.com/thmb/C1Nbj1M6jZK9Xm_lgD1ndDPPAk4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/singapore--garden-by-the-bay--supertree-grove-638256268-fa59e7e78b6449aaa40f68eafe6ff1a1.jpg",
      link: '/schedule/22'
    },
    {
      id: 23,
      placename: "Bangkok, Thailand",
      des: "Explore Bangkok's vibrant street life, stunning temples, and delicious street food.",
      Img: "https://www.nomadicmatt.com/wp-content/uploads/2018/07/bangkok4top.jpg",
      link: '/schedule/23'
    },
    {
      id: 24,
      placename: "Istanbul, Turkey",
      des: "Experience the crossroad of cultures in Istanbul, where East meets West in stunning architecture and history.",
      Img: "https://images.squarespace-cdn.com/content/v1/5ecc37f9dfb4ed54d3ff98e4/1593281296368-5Z2O2CY5XIQ7ZPLU6GA5/Insider%2BGuide%2Bto%2BIstanbul%2B-%2BHuffman%2BTravel.jpg",
      link: '/schedule/24'
    },
    {
      id: 25,
      placename: "Cairo, Egypt",
      des: "Uncover the mysteries of the Pyramids and the Sphinx in Cairo, where history and wonder intertwine.",
      Img: "https://i0.wp.com/www.touristegypt.com/wp-content/uploads/2023/03/giza-pyramids-cairo-egypt-with-palm.jpg?resize=1024%2C634&ssl=1",
      link: '/schedule/25'
    },
    {
      id: 26,
      placename: "Phuket, Thailand",
      des: "Relax on Phuket's pristine beaches and explore its bustling markets and vibrant nightlife.",
      Img: "https://amanda-wanders.com/wp-content/uploads/2018/03/IMG_3114.jpg",
      link: '/schedule/26'
    },
    {
      id: 27,
      placename: "Doha, Qatar",
      des: "Explore the ultramodern skyline of Doha, where traditional souks meet futuristic skyscrapers.",
      Img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSUSrXFHYRwlzc4u9VzqlQM2DGVSMcYc8b6DiANvCwDPvwjsicfyyG2kod5v5BvT-IUl6ccIeXfbqrsjGjsE9LdMarTN9oGqGgnVBcJGw",
      link: '/schedule/27'
    },
    {
      id: 28,
      placename: "Barcelona, Spain",
      des: "Wander through the architectural wonders of Barcelona, including Gaudi's masterpieces and the bustling Las Ramblas.",
      Img: "https://www.cuddlynest.com/blog/wp-content/uploads/2023/06/best-time-to-visit-barcelona-barceloneta-beach-2-1030x713.jpg",
      link: '/schedule/28'
    },
    {
      id: 29,
      placename: "Rio de Janeiro, Brazil",
      des: "Feel the rhythm of Rio as you visit its famous beaches, Christ the Redeemer, and Sugarloaf Mountain.",
      Img: "https://whc.unesco.org/uploads/thumbs/site_1100_0004-750-750-20120625114004.jpg",
      link: '/schedule/29'
    },
    {
      id: 30,
      placename: "Vienna, Austria",
      des: "Explore the grand palaces, museums, and musical heritage of Vienna, a city steeped in elegance.",
      Img: "https://www.thetrainline.com/cms/media/7496/europe_austria_vienna_ststephens.jpg",
      link: '/schedule/30'
    },
    {
      id: 31,
      placename: "Bali, Indonesia",
      des: "Relax on Bali's tropical beaches, visit iconic temples, and dive into its lush jungles.",
      Img: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/header-bali-nusa-tenggara.jpg",
      link: '/schedule/31'
    },
    {
      id: 32,
      placename: "Dubai, UAE",
      des: "Visit the futuristic city of Dubai, known for its towering skyscrapers, luxury shopping, and desert safaris.",
      Img: "https://img.etimg.com/thumb/width-640,height-480,imgsize-104894,resizemode-75,msid-105355936/news/international/uae/dubai-and-the-uae-a-global-wealth-nexus.jpg",
      link: '/schedule/32'
    },
    {
      id: 33,
      placename: "Cape Town, South Africa",
      des: "Enjoy stunning coastal views, visit Robben Island, and hike up Table Mountain in Cape Town.",
      Img: "https://www.zicasso.com/static/df1e8854d80a4880bba5857231010399/6d821/df1e8854d80a4880bba5857231010399.jpg",
      link: '/schedule/33'
    },
    {
      id: 34,
      placename: "Rome, Italy",
      des: "Discover the ancient wonders of Rome, from the Colosseum to the Vatican, where history comes alive.",
      Img: "https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy_3x2.jpg",
      link: '/schedule/34'
    },
    {
      id: 35,
      placename: "Tokyo, Japan",
      des: "Experience a fusion of traditional temples and cutting-edge technology in the bustling city of Tokyo.",
      Img: "https://images.squarespace-cdn.com/content/v1/5bbcf00a9b8fe874ed2f03d0/1599184835862-QUEZ741IHO7A8U1QP8AI/Shinjuku+Tokyo+Japan+at+night",
      link: '/schedule/35'
    },
    {
      id: 36,
      placename: "Riyadh, Saudi Arabia",
      des: "Discover the rich history and modern marvels of Riyadh, from ancient forts to the futuristic Kingdom Centre.",
      Img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQt4K7zqZPKpsIGSPSD3k4sgrrb2yWUG_Rl-F_kBQUZfRglDy3PrM535ufIlqnbXoAHho8ymV-6OlIgrth_goL8UPOuSNdMDoJsF_c98A",
      link: '/schedule/36'
    }

  ]
}
