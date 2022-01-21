import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';


const routes: Routes = [
  {path: 'details', component: PhoneDetailsComponent}
]
@NgModule({
  exports: [RouterModule],
  
  imports: [RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
