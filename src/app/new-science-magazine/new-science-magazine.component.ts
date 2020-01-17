import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../services/process.service"
import {NewMagazineService} from "../services/new-magazine.service"
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-science-magazine',
  templateUrl: './new-science-magazine.component.html',
  styleUrls: ['./new-science-magazine.component.css']
})
export class NewScienceMagazineComponent implements OnInit {

  private repeated_password = "";
  private categories = [];
  private formFieldsDto = null;
  private formFields = [];
  private choosen_category = -1;
  private processInstance = "";
  private enumValues = [];
  private tasks = [];

  constructor(private processService : ProcessService, private magazineService : NewMagazineService, private router: Router) {
     this.processService.startProcessNewMagazine().subscribe(res => {
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
        let x = this.magazineService.newMagazine(o, this.formFieldsDto.taskId);

        x.subscribe(
          res => {
            console.log(res);
            alert("Magazine created successfully!")
            window.location.href = "/naucne_oblasti?processId=" + this.processInstance;
          },
          err => {
            console.log("Error occured");
            alert("Bad parameters!");
          }
        );
      }

}
