import { Component, OnInit } from '@angular/core';
import {EnablingRequest} from '../model'
import {UserService} from '../services/users/user.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: EnablingRequest[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getRequests().subscribe(data => {
      this.requests = data;
    })
  }

  accept(id : string){
    this.userService.accept(id).subscribe(data => {
      this.userService.getRequests().subscribe(data => {
        this.requests = data;
      });
    });
  }

  decline(id: string){
    this.userService.decline(id).subscribe(data => {
          this.userService.getRequests().subscribe(data => {
            this.requests = data;
          });
        });
  }
}
