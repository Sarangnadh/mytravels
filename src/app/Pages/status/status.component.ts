import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit {
  [key: string]: any;

  happyCustomers: number = 0;
  registeredMembers: number = 0;
  Destinations: number = 0;
  Hotels: number = 0;

  finalHappyCustomers: number = 2857;
  finalRegisteredMembers: number = 3375;
  finalDestinations: number = 589;
  finalHotels: number = 2563;
  constructor(){}
  ngOnInit(): void {
    this.animateCounters();
  }

  animateCounters() {
    this.animateValue('happyCustomers', this.finalHappyCustomers, 1000);
    this.animateValue('registeredMembers', this.finalRegisteredMembers, 1000);
    this.animateValue('Destinations', this.finalDestinations, 1000);
    this.animateValue('Hotels', this.finalHotels, 1000);
  }
  animateValue(property: string, finalValue: number, duration: number) {
    let startValue = 0;
    const stepTime = Math.abs(Math.floor(duration / finalValue));
    const increment = finalValue > startValue ? 1 : -1;
    const timer = setInterval(() => {
      startValue += increment;
      if (startValue === finalValue) {
        clearInterval(timer);
      }
      this[property] = startValue;
    }, stepTime);
  }
}
