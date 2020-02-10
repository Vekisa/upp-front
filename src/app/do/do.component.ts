import { Component, OnInit } from '@angular/core';
import {ProcessService} from "../services/process.service"
import {NewLaborService} from "../services/new-labor.service"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.css']
})
export class DoComponent implements OnInit {

  private formFieldsDto = null;
  private formFields = [];
  private choosen_category = -1;
  private processInstance = "";
  private enumValues = [];
  private tasks = [];
  private magazines = [];

  constructor(private processService : ProcessService, private newLaborService : NewLaborService, private router: ActivatedRoute) {
    this.router.queryParams.subscribe(data => {
              this.processInstance =  data.processId;
              console.log(this.processInstance);
              this.refresh();
        });

  }

  ngOnInit() {

  }

  refresh(){
  console.log("Refreshujem!");
  this.processService.refreshLabor(this.processInstance).subscribe(res => {
    console.log("Rezultat: ");
    console.log(res);
    //this.categories = res;
    this.formFieldsDto = res;
    console.log(this.formFieldsDto);
    this.formFields = res.formFields;
    console.log(this.formFields);
    this.processInstance = res.processInstanceId;
    this.formFields.forEach( (field) =>{
      if( field.type.name=='enum'){
        this.enumValues = Object.keys(field.type.values);
      }
    });
    },
    err => {
      console.log("Error occured");
    }
  );
  }

  onSubmit(value, form){
        let o = new Array();
        console.log("--------------");
        console.log(form);
        console.log(value);
        console.log("--------------");
        for (var property in value) {
          console.log("PROPERTY: " + property);
          console.log("VALUE: " +  value[property]);
          o.push({fieldId : property, fieldValue : value[property]});
        }

        console.log(o);
        let x = this.processService.postNewLabor(o, this.formFieldsDto.taskId);

        x.subscribe(
          res => {
            console.log(res);
            alert("You submitted successfully!");
            this.refresh();
          },
          err => {
            console.log("Error occured");
            alert("Bad parameters!");
          }
        );
  }
}

