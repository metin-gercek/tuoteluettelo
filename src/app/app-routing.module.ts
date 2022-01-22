import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'details', component: PhoneDetailsComponent},
  {path: 'dashboard', component: DashboardComponent}
]
@NgModule({
  exports: [RouterModule],
  
  imports: [RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
