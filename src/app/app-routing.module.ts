import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DelishisComponent } from './delishis/delishis.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
 {path:"home",component:HomeComponent},
 {path:"about",component:AboutComponent},
 {path:"dishes",component:DelishisComponent},
 {path:"contact",component:ContactComponent},
 {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





exports: [RouterModule]
})
export class AppRoutingModule { }
