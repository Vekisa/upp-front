import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../services/process.service"
import {RepositoryService} from '../services/repository/repository.service';
import {UserService} from '../services/users/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private repeated_password = "";
    private categories = [];
    private formFieldsDto = null;
    private formFields = [];
    private choosen_category = -1;
    private processInstance = "";
    private enumValues = [];
    private tasks = [];



   constructor(private userService : UserService, private processService : ProcessService, private repositoryService : RepositoryService ) {
    this.processService.startProcess().subscribe(res => {
              console.log(res);
                      //this.categories = res;
                      this.formFieldsDto = res;
                      this.formFields = res.formFields;
                      this.processInstance = res.processInstanceId;
                      this.formFields.forEach( (field) =>{

                      if( field.type.name=='enum'){
                        this.enumValues = Object.keys(field.type.values);
                      }
                      });
                    },
                    err => {
                      console.log("Error occured");
     });
  }

  ngOnInit() {
       }

  onSubmit(value, form){
      let o = new Array();
      for (var property in value) {
        console.log(property);
        console.log(value[property]);
        o.push({fieldId : property, fieldValue : value[property]});
      }

      console.log(o);
      let x = this.userService.registerUser(o, this.formFieldsDto.taskId);

      x.subscribe(
        res => {
          console.log(res);

          alert("You registered successfully!")
        },
        err => {
          console.log("Error occured");
          alert("Bad parameters!");
        }
      );
    }

  getTasks(){
      let x = this.repositoryService.getTasks(this.processInstance);

      x.subscribe(
        res => {
          console.log(res);
          this.tasks = res;
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  claim(taskId){
      let x = this.repositoryService.claimTask(taskId);

      x.subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
     }

     complete(taskId){
      let x = this.repositoryService.completeTask(taskId);

      x.subscribe(
        res => {
          console.log(res);
          this.tasks = res;
        },
        err => {
          console.log("Error occured");
        }
      );
     }
}
