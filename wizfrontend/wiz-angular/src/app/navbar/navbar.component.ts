import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '../loading/loading.component';

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
      this.cd.detectChanges();
      this.ngOnInit();
    });
    this.cd.detectChanges();
  }
  logout(){
    sessionStorage.removeItem('Authorization');
    this.cd.detectChanges();
    this.studentProfile = null;
    this.ngOnInit();
    this.router.navigate(['/']);
  }
}
