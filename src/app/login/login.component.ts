import { Component, OnInit } from '@angular/core';
import { AutheticationService} from '../services/authetication.service'
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor( private authenticationService: AutheticationService, private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.form = this.formBuilder.group({
        username:[''],
        password:['']
      });
  }

  onSubmit(){
    console.log("Submit brate");
    this.authenticationService.authenticate(this.form.value.username, this.form.value.password);
    window.location.href = "";
  }
}
