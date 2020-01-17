import { Component } from '@angular/core';
import {AutheticationService} from "./services/authetication.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nc';
  isLoggedIn : boolean;
  isInGroupAdmin : boolean;
  isInGroupEditor: boolean;

  constructor(private authService : AutheticationService) {}

  ngOnInit(){
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isInGroupAdmin = this.authService.isInGroup("admin");
    this.isInGroupEditor = this.authService.isInGroup("editor");
  }

  logOut(){
    this.authService.logOut();
    window.location.href = "";
  }
}
