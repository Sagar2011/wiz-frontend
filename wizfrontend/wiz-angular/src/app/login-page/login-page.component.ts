import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login: FormGroup;
  hide = true;
  constructor(private fb:FormBuilder, private stu: StudentService, private router:Router) {
    this.login = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
   }

  ngOnInit() {
  }
  signIn() {
    this.stu.Login(this.login.get('username').value, this.login.get('password').value).subscribe((response)=>{
      console.log('success'+ response)
            if(response.statusCode=== 200){
        console.log('success'+ response)
        sessionStorage.setItem('Authorization', `Bearer ${response.results}`);
        this.router.navigate(['students']);
      } else{
        this.router.navigate(['internal']);
      }
    });
  }
}
