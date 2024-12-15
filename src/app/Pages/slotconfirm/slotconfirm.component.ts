import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slotconfirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slotconfirm.component.html',
  styleUrl: './slotconfirm.component.css'
})
export class SlotconfirmComponent implements OnInit {
  customerName: string | undefined;
  tripDetails: any;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.customerName = params['customerName']; 
      this.tripDetails = params; 
      // console.log('Customer Name:', this.customerName);
      console.log('Trip Details:', this.tripDetails);
    })

  }

}
