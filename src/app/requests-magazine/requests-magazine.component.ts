import { Component, OnInit } from '@angular/core';
import {EnablingRequest} from '../model'
import {UserService} from '../services/users/user.service';

@Component({
  selector: 'app-requests-magazine',
  templateUrl: './requests-magazine.component.html',
  styleUrls: ['./requests-magazine.component.css']
})
export class RequestsMagazineComponent implements OnInit {

 requests: EnablingRequest[];
  constructor(private userService : UserService) { }

  ngOnInit() {
      this.userService.getRequestsMagazine().subscribe(data => {
        this.requests = data;
      })
    }

    accept(id : string){
      this.userService.acceptMagazine(id).subscribe(data => {
        this.userService.getRequestsMagazine().subscribe(data => {
          this.requests = data;
        });
      });
    }

    decline(id: string){
      this.userService.declineMagazine(id).subscribe(data => {
            this.userService.getRequestsMagazine().subscribe(data => {
              this.requests = data;
            });
          });
    }

}
