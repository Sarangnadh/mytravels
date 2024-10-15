import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  selectedSchedule: any = {};   // This will hold the data passed from the previous page
  hotels: any[] = []; // Create an array to hold the hotel data
  flights: any[] = [];
  bookingForm!:FormGroup
 
  constructor(private router: Router, private route: ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
   this.bookingForm=this.fb.group({
    CustomerName:[''],
    from:[''],
    destination:[''],
    selectDate:[''],
    returnDate:[''],
    countPeople:[''],
    selectedHotel: [''],
    selectedFlight: ['']
  
    })






    // Access the query parameters from the route
    this.route.queryParams.subscribe(params => {
      // Check if params are available
      if (params['id']) {
        this.selectedSchedule = {
          id: params['id'],
          pname: params['pname'],
          hotel: JSON.parse(params['hotel']),
          airlines: JSON.parse(params['airlines'])
        }
        this.bookingForm.patchValue({
          destination: this.selectedSchedule.pname
        });
        this.hotels = this.selectedSchedule.hotel;
        // console.log(this.hotels);
        this.flights = this.selectedSchedule.airlines
        // console.log(this.flights);

        // console.log('Selected Schedule:', this.selectedSchedule); 
        // Log the retrieved data
      } else {
        console.error('No schedule data found'); // Log the error message
      }
    });
  }

booking(){
  console.log(this.bookingForm.value);
  
}

}





