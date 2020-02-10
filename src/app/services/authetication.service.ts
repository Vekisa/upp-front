import { Injectable } from '@angular/core';
import {User } from '../model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  private userSubject : BehaviorSubject<User>;
  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("currentUser")));
  }

  authenticate(username, password){
    return this.http.get("http://localhost:8080/process/auth",{headers: {authorization : "Basic " + window.btoa(username + ":" + password)}}).subscribe(data =>{
      const user = new User(username, password);
      alert(username + " " + password)
      this.userSubject.next(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      sessionStorage.setItem("authenticatedUser",username);
      this.getGroups().subscribe(data => {
        sessionStorage.setItem("userGroups",JSON.stringify(data));
      })
    });
  }

  isLoggedIn(){
    const user = sessionStorage.getItem("authenticatedUser");
    if(user == null)
      return false;
    else
      return true;
  }

  getUser() : User{
    return this.userSubject.value;
  }

  getValueFromUserSubject(){
    return this.userSubject.value;
  }

  logOut(){
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("userGroups");
    localStorage.removeItem("currentUser");
    this.userSubject.next(null);
  }

  isInGroup(group : string){
    const groups = sessionStorage.getItem("userGroups");
    if(groups == null)
      return false;
    return groups.includes(group);
  }


  getGroups(){
     return this.http.get("http://localhost:8080/process/groups");
  }
}
