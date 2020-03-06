import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['created', 'name', 'mobileNumber', 'email'];
  studentsData: any;

  resultsLength = 0;
  isLoadingResults = true;
  profile = {'name':'Sagar', 'email': 's@g.com' , 'number': 9099999999};
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private _httpClient: HttpClient) {}
  ngOnInit() {

  }
}
