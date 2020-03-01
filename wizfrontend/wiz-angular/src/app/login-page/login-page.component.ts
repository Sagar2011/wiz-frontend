import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login: FormGroup;
  hide = true;
  constructor(private fb:FormBuilder) {
    this.login = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
   }

  ngOnInit() {
  }
  signIn(){
    console.log("data", this.login.value)
  }

}
