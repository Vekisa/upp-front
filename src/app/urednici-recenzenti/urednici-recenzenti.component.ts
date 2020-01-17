import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users/user.service'
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-urednici-recenzenti',
  templateUrl: './urednici-recenzenti.component.html',
  styleUrls: ['./urednici-recenzenti.component.css']
})
export class UredniciRecenzentiComponent implements OnInit {
  form: FormGroup;
  reviewers :string[];
  editors: string[];
  processId :string;

  constructor(private formBuilder: FormBuilder, private userService : UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.userService.reviewers().subscribe(data => {
      this.reviewers = data;
    });
    this.userService.editors().subscribe(data => {
          this.editors = data;
    });
    this.router.queryParams.subscribe(data => {
          this.processId =  data.processId;
          console.log(this.processId);
    });
    this.form = this.formBuilder.group({
                    urednik1:[''],
                    urednik2:[''],
                    recenzent1:[''],
                    recenzent2:['']
    });
  }

  onSubmit(){
    this.userService.addRW(this.form.value.urednik1,this.form.value.urednik2,this.form.value.recenzent1,this.form.value.recenzent2,this.processId).subscribe(data=>{
      alert("Postavljeni!");
      window.location.href = "";
    })
  }

}
