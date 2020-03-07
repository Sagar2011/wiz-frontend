import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  signup: 'http://localhost:9000/student';
  login: 'http://localhost:9000/login';
  constructor(private http: HttpClient) { }

  signUp(data:any) : Observable<any>{
    console.log('service' + data);
    return this.http.post(`http://localhost:9000/student`,data, {headers:new HttpHeaders({'Content-Type':  'application/json'})});
  }

  Login(username:any, pass:any) :Observable<any>{
    const headers = new HttpHeaders({'username': username, 'password': pass});
    return this.http.get(`http://localhost:9000/login`, {headers});
  }

  profile() :Observable<any>{
    return this.http.get(`http://localhost:9000/profile`, {headers:new HttpHeaders({'Authorization':  sessionStorage.getItem('Authorization')})});
  }

  studentsList():Observable<any>{
    return this.http.get(`http://localhost:9000/students`, {headers:new HttpHeaders({'Authorization':  sessionStorage.getItem('Authorization')})});
  }
}
