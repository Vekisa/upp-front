import {NewMagazineService} from "../services/new-magazine.service"
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-naucne-oblasti',
  templateUrl: './naucne-oblasti.component.html',
  styleUrls: ['./naucne-oblasti.component.css']
})
export class NaucneOblastiComponent implements OnInit {

  //@ViewChild('checkbox', {static: false})
  //public mulObj: MultiSelectComponent;

  public data: any;
  private processId :string;
  constructor(private newMagazineService : NewMagazineService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.newMagazineService.getScientificAreas().subscribe(data1 => {
      this.data = data1;
    });
    this.router.queryParams.subscribe(data => {
      this.processId =  data.processId;
      console.log(this.processId);
    })
  }

  addAreas(){
    /*console.log(this.mulObj.value);
    this.newMagazineService.addScientificAreas(this.mulObj.value, this.processId).subscribe(data => {
      alert("Added!");
      window.location.href = "/urednici_recenzenti?processId=" + this.processId;
    });*/
  }

}
