import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  hotelDetails: any = [];
  airlineDetails: any = [];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private service: ServicesService) { }

  ngOnInit(): void {
    this.initializeForm();

    // data retrieve

    this.route.queryParams.subscribe((params) => {
      console.log('Query Paramas', params);
      const tripDestination = params['pname']
      this.hotelDetails = params['hotel'] ? JSON.parse(params['hotel']) : [];
      this.airlineDetails = params['airlines'] ? JSON.parse(params['airlines']) : [];
      const mustVisitPlaces = params['mustvisit'] ? JSON.parse(params['mustvisit']) : [];

      console.log('destination', tripDestination);
      console.log('HotelDetails', this.hotelDetails);
      console.log('AirlineDetails', this.airlineDetails);
      console.log('mustvisitPlaces', mustVisitPlaces);

      // Populate the form 
      this.bookingForm.patchValue({
        destination: params['pname'],
        selectedHotel: this.hotelDetails[0]?.name || '',
        selectedFlight: this.airlineDetails[0]?.name || '',
      });

    });


  }

  initializeForm(): void {
    this.bookingForm = this.fb.group({
      CustomerName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]*$') // Only alphabets and spaces
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email // Valid email format
        ]
      ],
      mobno: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$') // 10-digit phone number
        ]
      ],
      password: [
        '',
        [Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$'),
        Validators.minLength(6),
        Validators.maxLength(12)]
      ],
      countPeople: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(10)
        ]
      ],
      from: ['', [Validators.required]],
      destination: [Validators.required],
      selectDate: ['', [Validators.required,this.pastDatevalidation]],
      returnDate: ['', [Validators.required,this.pastDatevalidation,this.returnDateValidator.bind(this)]],
      selectedHotel: ['', Validators.required],
      selectedFlight: ['', Validators.required]
    });
  
  }
  

  pastDatevalidation(control:AbstractControl): ValidationErrors | null{
const selectedDate =new Date(control.value);
const today =new Date();
today.setHours(0,0,0,0);
return selectedDate >=today ? null :{pastDate:true}
  }

returnDateValidator(control:AbstractControl):ValidationErrors | null {
  const returnDate =new Date(control.value);
  const selectDate =new Date(this.bookingForm?.get('selectDate')?.value);
  if(!control.value || !this.bookingForm?.get('selectDate')?.value)
  {
    return null;
  }
  const minReturnDate = new Date(selectDate);
  minReturnDate.setDate(minReturnDate.getDate()+8)
  return returnDate>=minReturnDate ?null :{invalidReturnDate:true};
}

  booking(): void {

    var customerName = this.bookingForm.value.CustomerName
    var email = this.bookingForm.value.email
    var mobno = this.bookingForm.value.mobno
    var password = this.bookingForm.value.password
    const tripInfo = {
      from: this.bookingForm.value.from,
      destination: this.bookingForm.value.destination,
      selectDate: this.bookingForm.value.selectDate,
      returnDate: this.bookingForm.value.returnDate,
      countPeople: this.bookingForm.value.countPeople,
    }
    const preferences = {
      selectedHotels: this.bookingForm.value.selectedHotel,
      selectedFlight: this.bookingForm.value.selectedFlight,
    }

    if (this.bookingForm.valid) {
      const result = this.service.bookingconfirm(customerName, email, mobno, password, tripInfo, preferences)
      if (result) {
        alert(`${customerName}, your Trip from ${tripInfo.from} to ${tripInfo.destination}  has been confirmed! Enjoy the Journey with ${preferences.selectedFlight}  `)
        this.router.navigate(['/slotconfirm'], {
          queryParams: {
            UserName: customerName,
            From: tripInfo.from,
            Destination: tripInfo.destination,
            Airline: preferences.selectedFlight

          }
        })
      }

    }
    else {
      alert("Invalid form")
      // const bookingData = this.bookingForm.value;
      this.markAllAsTouched();
      alert('Please fill out all required fields correctly.');
      console.log(this.bookingForm.controls);
      // console.log('Booking Data:', bookingData);
      return;

    }

  }

  markAllAsTouched(): void {
    Object.keys(this.bookingForm.controls).forEach((field) => {
      const control = this.bookingForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
