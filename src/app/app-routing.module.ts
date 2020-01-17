import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {NewScienceMagazineComponent} from './new-science-magazine/new-science-magazine.component';
import {RequestsComponent} from './requests/requests.component';
import { NaucneOblastiComponent } from './naucne-oblasti/naucne-oblasti.component'
import { UredniciRecenzentiComponent } from './urednici-recenzenti/urednici-recenzenti.component'
import {RequestsMagazineComponent} from './requests-magazine/requests-magazine.component'

const routes: Routes = [
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'new_magazine', component: NewScienceMagazineComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'naucne_oblasti', component: NaucneOblastiComponent},
  {path: 'urednici_recenzenti', component: UredniciRecenzentiComponent},
  {path: 'requests-magazine', component: RequestsMagazineComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
