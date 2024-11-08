import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators ,AbstractControl, ValidationErrors, ValidatorFn,} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

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
 
  constructor(private router: Router, private route: ActivatedRoute,private fb:FormBuilder,private service:ServicesService) { }

  ngOnInit(): void {
   this.bookingForm=this.fb.group({
    CustomerName:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.required, Validators.email]],
    mobno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], 
    from:['',Validators.required],
    destination:['',Validators.required],
    selectDate:['',[Validators.required,this.noPastDateValidator()]],
    returnDate:['',[Validators.required,this.noPastDateValidator()]],
    countPeople:['',[Validators.required,Validators.min(1),Validators.max(10)]],
    selectedHotel: ['',Validators.required,this.hotelValidator.bind(this)],
    selectedFlight: ['',[Validators.required,this.airlineValidator.bind(this)]]
   }, {
    validators: [this.dateDifferenceValidator()]
    })






    // Access the query parameters from the route
    this.route.queryParams.subscribe(params => {
      // Check if params are available
      if (params['id']) {
        this.selectedSchedule = {
          id: params['id'],
          pname: params['pname'],
          hotel: JSON.parse(params['hotel']),
          airlines: JSON.parse(params['airlines']),
          mustvisit: JSON.parse(params['mustvisit'])
        }
        this.bookingForm.patchValue({
          destination: this.selectedSchedule.pname
        });
        this.hotels = this.selectedSchedule.hotel;
        // console.log(this.hotels);
        this.flights = this.selectedSchedule.airlines
        // console.log(this.flights);

        console.log('Selected Schedule:', this.selectedSchedule); 
        // Log the retrieved data
      } else {
        console.error('No schedule data found'); // Log the error message
      }
    });
  }
  noPastDateValidator(){
    return (control:any)=>{
      const selectedDate =new Date(control.value);
      const today =new Date();
      today.setHours(0,0,0,0);
      return selectedDate <today ?{pastDate:true} : null;
    };
  }

  dateDifferenceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectDate = control.get('selectDate')?.value;
      const returnDate = control.get('returnDate')?.value;

      if (!selectDate || !returnDate) {
        return null; // Don't validate if dates are missing
      }

      const selectDateObj = new Date(selectDate);
      const returnDateObj = new Date(returnDate);
      const timeDifference = returnDateObj.getTime() - selectDateObj.getTime();
      const dayDifference = timeDifference / (1000 * 3600 * 24);

      if (selectDate === returnDate) {
        return { sameDateError: true }; // Return error if dates are equal
      }

      if (dayDifference < 8) {
        return { dateDifferenceError: true }; // Return error if difference is less than 8 days
      }

      return null; // No error
    };
  }

  hotelValidator(control:any){
    const selectedHotel=control.value;
    if(this.hotels.length>0 && !this.hotels.includes(selectedHotel)){
      return { invalidHotel:true};
    }
    return null;
  }
  airlineValidator(control:any)
  {
    const selectedFlight=control.value;
    if(this.flights.length>0&& !this.flights.includes(selectedFlight)){
      return {invalidFlight:true}
    }
    return null;
  }


booking(){
     this.router.navigateByUrl("slotconfirm")
    console.log(this.bookingForm.value);
  var customerName  = this.bookingForm.value.CustomerName
  var email =this.bookingForm.value.email
  var mobno =this.bookingForm.value.mobno
  var password =this.bookingForm.value.password
  const tripInfo ={
  from :this.bookingForm.value.from,
  destination:this.bookingForm.value.destination,
  selectDate :this.bookingForm.value.selectDate,
  returnDate : this.bookingForm.value.returnDate,
  countPeople : this.bookingForm.value.countPeople,
  selectedHotel : this.bookingForm.value.selectedHotel,
  selectedFlight :this.bookingForm.value.selectedFlight,
  }
  const result =this.service.bookingconfirm(customerName,email,mobno,password,tripInfo)

 

}




}







