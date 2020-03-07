import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['createdAt', 'name', 'mobileNumber', 'email'];
  studentsData: any;

  resultsLength = 0;
  isLoadingResults = true;
  profile: any;
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private stu: StudentService) { }
  ngOnInit() {
    this.stu.profile().subscribe((response)=>{
      this.profile = response;
    });

    this.stu.studentsList().subscribe((res)=>{
        this.studentsData = res.results;
        this.isLoadingResults = false;
    });
  }
}
