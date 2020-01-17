import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewScienceMagazineComponent } from './new-science-magazine/new-science-magazine.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RequestsComponent } from './requests/requests.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NaucneOblastiComponent } from './naucne-oblasti/naucne-oblasti.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { UredniciRecenzentiComponent } from './urednici-recenzenti/urednici-recenzenti.component';
import {BasicAuthInterceptor} from "./auth.interceptor"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsMagazineComponent } from './requests-magazine/requests-magazine.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NewScienceMagazineComponent,
    RequestsComponent,
    NaucneOblastiComponent,
    UredniciRecenzentiComponent,
    RequestsMagazineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MultiSelectModule,
    ReactiveFormsModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
