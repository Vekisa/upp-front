import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  list :any[];

  constructor(private userService : UserService, private router: ActivatedRoute, private routerr:Router) { }

  ngOnInit() {
    this.userService.getTasks().subscribe(data => {
      console.log("TASKOVI");
      console.log(data);
      this.list = data;
    })
  }
  do(s){
    this.routerr.navigate(['/do'],
             {queryParams: {processId: s}});
  }


}
