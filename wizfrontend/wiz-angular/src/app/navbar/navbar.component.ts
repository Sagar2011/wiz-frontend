import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show = false;
  studentProfile:any
  constructor(private stu: StudentService, private cd: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.stu.profile().subscribe((response)=>{
      this.show = true;
      this.studentProfile = response;
      this.cd.markForCheck();
      this.cd.detectChanges();
    });
    this.cd.markForCheck();
    this.cd.detectChanges();
  }
  logout(){
    sessionStorage.removeItem('Authorization');
    this.cd.markForCheck();
    this.cd.detectChanges();
    this.router.navigate(['/']);
  }
}
