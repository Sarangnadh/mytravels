import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { MaintainComponent } from './Pages/maintain/maintain.component';
import { ScheduleComponent } from './Pages/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { BookingComponent } from './Pages/booking/booking.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"",component:HomepageComponent},
    {path:"about",component:AboutComponent},
    {path:"services",component:ServicesComponent},
    {path:"contact",component:ContactComponent},
    {path:"main",component:MaintainComponent},
    {path:"schedule/:id",component:ScheduleComponent},
    {path:"booking",component:BookingComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }