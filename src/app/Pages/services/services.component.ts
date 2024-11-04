import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { StatusComponent } from "../status/status.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent, StatusComponent,CommonModule,RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
 

  ngOnInit() {
  
  }

  airlines = [
    {
      name: 'Vistara',
      logo: 'https://content.jdmagicbox.com/v2/comp/mumbai/r1/022pxx22.xx22.170420093852.v6r1/catalogue/vistara-customer-care--mumbai-grwte.jpg',
      banner: 'https://www.informalnewz.com/wp-content/uploads/2022/10/Vistara-Announces-Festive-720x720.jpg',
      description: 'Founded in 2015, Vistara is known for excellent service in Indian aviation.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://i.ytimg.com/vi/JiCzm2bKW-I/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEUgPSh_MA8=&rs=AOn4CLAdX-82yAI1xrV8A6vSxn8FD21M0g', description: 'Friendly and attentive cabin crew.' },
        { title: 'Ground Staff Care', img: 'https://www.airvistara.com/content/dam/airvistara/global/english/plan-travel/optionalservices/images/VISTARA-PRIORITY-OCT20.jpg', description: 'Efficient and helpful ground staff.' },
        { title: 'Customer Care', img: 'https://www.airvistara.com/content/dam/airvistara/global/english/careers/images/2022/Industry-leader.jpg', description: '24/7 support for all travel needs.' },
        { title: 'Food & Specialties', img: 'https://vistaramagazine.com/wp-content/uploads/2022/05/Vistara-Inflight-dining.jpg', description: 'Delicious meals and snacks.' }
      ]
    },
    {
      name: 'Air India',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5K9GkjE7b0_NT0NiXSYhHVSrqElEZnL0veQ&s',
      banner: 'https://aviationa2z.com/wp-content/uploads/2022/06/150914-airindia.jpg',
      description: 'Air India has served millions of passengers since its inception, connecting cities across India and the world.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--d16acbb7-942c-4a42-b8eb-96c35cdd31db/Cabin%20Experience.webp', description: 'Experienced and courteous cabin crew.' },
        { title: 'Ground Staff Care', img: 'https://www.aisats.in/storage/image/DOJWza28kOg2s1BHOSZlUlxnmNicMsok84DWb0n0.jpg', description: 'Helpful ground support to assist in every step.' },
        { title: 'Customer Care', img: 'https://www.airindia.com/content/dam/air-india/air-india-rebrand/og-images-revised/customer-support-portal.jpg', description: '24/7 helpline for booking and travel inquiries.' },
        { title: 'Food & Specialties', img: 'https://media.licdn.com/dms/image/v2/D4D22AQEXsOCL0YKyaQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1707228923513?e=2147483647&v=beta&t=TDIP3nugY7wX_eYZRwD-L2wD72pXHK3WTrmfvuczWlg', description: 'Authentic Indian cuisine available on board.' }
      ]
    },
    {
      name: 'Air India Express',
      logo: 'https://i.pinimg.com/originals/a7/46/ff/a746ffb8b0c9e2eb92089de7c879c195.png',
      banner: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/09/full/1715231945-7347.jpg',
      description: 'Air India Express, the budget arm of Air India, offers affordable flights with quality service.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJ_IY6zRk9igFvt__Py0CBIa_Iv-kPxuTzQ&s', description: 'Dedicated crew offering budget-friendly service.' },
        { title: 'Ground Staff Care', img: 'https://www.aisats.in/storage/image/VI5im8qVfi1ka8Gy157f0uWOwSSRV9eHvysdMjSN.png', description: 'Quick and efficient ground service.' },
        { title: 'Customer Care', img: 'https://www.shutterstock.com/image-photo/happy-hispanic-woman-working-inside-260nw-2245748463.jpg', description: 'Assistance available for budget travelers.' },
        { title: 'Food & Specialties', img: 'https://jtaviation.in/blog/admin/ckfinder/userfiles/images/Untitled%20design(12).png', description: 'Simple and tasty meals suited for budget travel.' }
      ]
    },
    
    {
      name: 'IndiGo',
      logo: 'https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png',
      banner: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/03/full/1727942571-3575.jpg',
      description: 'India’s largest airline by passengers, IndiGo is known for on-time performance and affordable fares.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQFHAOm6Y7EKJbAoYXy4zS3cGzso6BVsDFw&s', description: 'Friendly and professional crew members.' },
        { title: 'Ground Staff Care', img: 'https://www.goindigo.in/content/dam/indigov2/6e-website/travel-information/Mobile-FAQ.jpg', description: 'Quick assistance at every airport.' },
        { title: 'Customer Care', img: 'https://content3.jdmagicbox.com/v2/comp/mumbai/e1/022pxx22.xx22.180416114551.r9e1/catalogue/indigo-airlines-customer-care-mumbai-kl7nz1eqt9.jpg', description: 'Support across various channels for travel needs.' },
        { title: 'Food & Specialties', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2jv9WwlxeCaMreUAic_HGi3QAhL5ppHIKQ&s', description: 'Simple meals with quality ingredients.' }
      ]
    },
    {
      name: 'SpiceJet',
      logo: 'https://logowik.com/content/uploads/images/spicejet5998.logowik.com.webp',
      banner: 'https://book.spicejet.com/images/SpiceJet/spiceaddons_landing_banner.jpg',
      description: 'SpiceJet brings people together with affordable travel options and reliable services.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://i.pinimg.com/564x/20/b6/35/20b635871dc1ff0906e18de7e3a693f4.jpg', description: 'Polite and efficient cabin crew.' },
        { title: 'Ground Staff Care', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkExAthG2fMdXC_z4-6Wwav7mJDDJDPmhhvQ&s', description: 'Assistance throughout the airport process.' },
        { title: 'Customer Care', img: 'https://www.financialexpress.com/wp-content/uploads/2020/08/spicejet-reu.jpg?w=440', description: 'Customer service for booking and assistance.' },
        { title: 'Food & Specialties', img: 'https://im.rediff.com/money/2015/jul/20spice6.jpg', description: 'Delicious in-flight snacks and meals.' }
      ]
    },
    //  international airline
    {
      name: 'British Airways',
      logo: 'https://www.doigandsmith.co.uk/wp-content/uploads/2019/09/british-airways-logo-transparent.png',
      banner: 'https://thecabincrewforum.com/wp-content/uploads/2019/10/britishairways_21686539211079-1.jpg',
      description: 'British Airways is the flag carrier of the United Kingdom, known for its high-quality service and extensive network.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://luchtvaartnieuws.nl/sites/default/files/website_633x300/slider-overig/cabin-crew-cabinecbritish-airways-1200.jpg', description: 'Professional and attentive cabin crew for a comfortable journey.' },
        { title: 'Ground Staff Care', img: 'https://mediacentre.britishairways.com/contents/archives/216/86/images/thumb1280x1683_width/britishairways_2168617542372332_thumb.jpg', description: 'Helpful staff available for a smooth travel experience.' },
        { title: 'Customer Care', img: 'https://mediacentre.britishairways.com/contents/archives/216/86/images/thumb1280x1683_width/gec-contact-centre-newcastle-woman-operator-afbe7_thumb.jpg', description: 'Dedicated customer service to assist with all inquiries.' },
        { title: 'Food & Specialties', img: 'https://www.britishairways.com/assets/images/baft/carousel/cst760x350.jpg', description: 'Classic British cuisine served on board.' }
      ]
    },
    {
      name: 'Air Canada',
      logo: 'https://logos-world.net/wp-content/uploads/2021/05/Air-Canada-Logo.png',
      banner: 'https://advertising.expedia.com/wp-content/uploads/2022/11/AirCanada-Card-Image_534x356.jpg',
      description: 'Air Canada, the largest airline in Canada, offers diverse routes and a commitment to customer satisfaction.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://images.squarespace-cdn.com/content/v1/5e38526a53944e15e1b49383/1646943412676-56ZWUT5OM25L32YSM0U0/banner-image--home.jpg', description: 'Caring and professional cabin crew to enhance your journey.' },
        { title: 'Ground Staff Care', img: 'https://static.eluta.ca/jn/h3/review_slide_17_2024_00_small_eded060976c3d5af5081385f09d785ce.jpg', description: 'Efficient assistance from ground staff for hassle-free travel.' },
        { title: 'Customer Care', img: 'https://static.wixstatic.com/media/197a5e_d8abe7f9c8e04d15b781d2cbe12673e6.jpg/v1/fill/w_980,h_617,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/197a5e_d8abe7f9c8e04d15b781d2cbe12673e6.jpg', description: '24/7 support available for passengers.' },
        { title: 'Food & Specialties', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQIAIHfZbcUoLoL2sWtN0a_CSAwvPXj2Ne7fN2vqUOe9c4YDKzrb5n1OJ7ztfsGwxxb0&usqp=CAU', description: 'Fresh and local cuisine options available.' }
      ]
    },
    {
      name: 'Singapore Airlines',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/1200px-Singapore_Airlines_Logo_2.svg.png',
      banner: 'https://images.squarespace-cdn.com/content/v1/52ccee75e4b00bc0dba03f46/6dbe6eff-df73-41e5-9154-264e62cd3392/30%25.png',
      description: 'Singapore Airlines is recognized for its exceptional service and luxurious travel experiences.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://cabincrew24.com/wp-content/uploads/2024/01/Singapore-Airlines-Female-Male-Cabin-Crew-in-The-Cabin.jpeg', description: 'Exemplary service from trained cabin crew.' },
        { title: 'Ground Staff Care', img: 'https://onecms-res.cloudinary.com/image/upload/s--kYeaDHDS--/c_fill,g_auto,h_676,w_1200/f_auto,q_auto/v1/tdy-migration/22353909.JPG?itok=exmjCUFt', description: 'Polite and professional ground staff to assist you.' },
        { title: 'Customer Care', img: 'https://thumbs.dreamstime.com/b/singapore-changi-airport-november-staff-primary-civilian-one-95589996.jpg', description: 'Global support available for every travel need.' },
        { title: 'Food & Specialties', img: 'https://www.paddleyourownkanoo.com/wp-content/uploads/2022/10/shutterstock_1425478685-scaled.jpg', description: 'Gourmet dining experience inspired by Singaporean flavors.' }
      ]
    },
    {
      name: 'Malaysia Airlines',
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/Malaysia-Airlines-Logo.png',
      banner: 'https://www.malaysiaairlines.com/content/dam/mh/my/en/about-us/join-us/join-cabin-crew/content-image/Join-Us-Image_990x557.png',
      description: 'Malaysia Airlines connects Malaysia to the world with quality service and hospitality.',
      services: [
        { title: 'Cabin Crew Care', img: 'https://cabincrew24.com/wp-content/uploads/Malaysia-Airlines-Cabin-Crew-uniform-1024x768.jpg', description: 'Welcoming and friendly cabin crew to ensure comfort.' },
        { title: 'Ground Staff Care', img: 'https://www.aerodarat.com/wp-content/uploads/2018/08/Passenger-Services03.jpg', description: 'Assistance provided at every point in your journey.' },
        { title: 'Customer Care', img: 'https://www.malaysiaairlines.com/content/dam/mh/my/en/askmh/v2/ContactUs_750x562.jpg', description: 'Customer support for any queries or assistance.' },
        { title: 'Food & Specialties', img: 'https://www.shutterstock.com/image-photo/kuala-lumpur-malaysia-september-17-600nw-2389120061.jpg', description: 'Delicious Malaysian cuisine on board.' }
      ]
    },
    

  
  ];
  

 
}
