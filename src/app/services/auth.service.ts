import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data:SignUp){
    const url = 'http://localhost:5020/register';
    return this.http.post(url, data);
   
    // this.router.navigate(['login'])
 

  }
}
