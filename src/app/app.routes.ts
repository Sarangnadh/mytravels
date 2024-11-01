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
import { SlotconfirmComponent } from './Pages/slotconfirm/slotconfirm.component';
import { ExploreComponent } from './Pages/explore/explore.component';
import { RegisterComponent } from './Pages/register/register.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"",component:HomepageComponent},
    {path:"about",component:AboutComponent},
    {path:"services",component:ServicesComponent},
    {path:"contact",component:ContactComponent},
    {path:"main",component:MaintainComponent},
    {path:"schedule/:id",component:ScheduleComponent},
    {path:"booking",component:BookingComponent},
    {path:"slotconfirm",component:SlotconfirmComponent},
    {path:"explore",component:ExploreComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }