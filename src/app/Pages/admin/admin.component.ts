import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { ServicesService } from '../../Services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  users:any[]=[]
  constructor(private ds:ServicesService){}
  ngOnInit(): void {
    this.users=this.ds.getAllUsers();
    console.log(this.users);
    
  }

  removeUser(email: string) {
    const confirmation = confirm("Are you sure you want to delete this user?");
    if (confirmation) {
      if (this.ds.removeUser(email)) {
        alert("User removed successfully!");
        this.users = this.ds.getAllUsers(); // refresh user list
      } else {
        alert("Failed to remove user.");
      }
    }
  }
}
