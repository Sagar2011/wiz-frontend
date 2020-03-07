import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide =false;
  signup: FormGroup;
  constructor(private fb: FormBuilder, private stu: StudentService, private router:Router) {
    this.signup = this.fb.group({
      username: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z0-9]{4,12}$/)]),
      password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      name: new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      mobileNumber: new FormControl('',[Validators.required,Validators.pattern(/^([6-9])[\d]{9}$/)])
    });
   }

  ngOnInit() {
  }
  signUp(){
    console.log(this.signup.value);
    this.stu.signUp(this.signup.value).subscribe((response)=>{
      console.log('success'+ response)
            if(response.statusCode=== 200){
          sessionStorage.setItem('Authorization', `Bearer ${response.results}`);
          this.router.navigate(['students']);
      } else{
        this.router.navigate(['internal']);
      }
    });
  }
}
