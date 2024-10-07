import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-maintain',
  standalone: true,
  imports: [],
  templateUrl: './maintain.component.html',
  styleUrl: './maintain.component.css'
})
export class MaintainComponent implements OnInit,OnDestroy {
  targetDate: Date = new Date('nov 15, 2024 00:00:00');
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    // Start countdown interval
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      this.days = this.hours = this.minutes = this.seconds = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.days = this.formatTime(days);
    this.hours = this.formatTime(hours);
    this.minutes = this.formatTime(minutes);
    this.seconds = this.formatTime(seconds);
  }

  private formatTime(time: number): string {
    return time < 10 ? `0${time}` : time.toString();
  }
}
