import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  fetchUsers() {
    return this.httpClient.get("http://localhost:8080/user/fetch") as Observable<any>;
  }

  registerUser(user, taskId) {
    return this.httpClient.post("http://localhost:8080/auth/post/".concat(taskId), user) as Observable<any>;
  }

  getRequests() {
    return this.httpClient.get("http://localhost:8080/request") as Observable<any>;
  }

  getRequestsMagazine() {
      return this.httpClient.get("http://localhost:8080/request/magazine") as Observable<any>;
    }

  accept(id : string){
    console.log(id);
    return this.httpClient.post("http://localhost:8080/process/enable_user?value=true&processId=" + id,id) as Observable<any>;
  }

  acceptMagazine(id : string){
      console.log(id);
      return this.httpClient.post("http://localhost:8080/process/enable_magazine?value=true&processId=" + id,id) as Observable<any>;
    }

  decline(id : string){
      return this.httpClient.post("http://localhost:8080/process/enable_user?value=false&processId=" + id, id) as Observable<any>;
  }

  declineMagazine(id : string){
        return this.httpClient.post("http://localhost:8080/process/enable_magazine?value=false&processId=" + id, id) as Observable<any>;
    }

  reviewers(){
    return this.httpClient.get("http://localhost:8080/process/reviewers") as Observable<any>;
  }

  editors(){
      return this.httpClient.get("http://localhost:8080/process/editors") as Observable<any>;
    }

  addRW(e1,e2,r1,r2,id){
    return this.httpClient.post("http://localhost:8080/process/addrw?editor1=" + e1 + "&editor2=" + e2 + "&reviewer1=" + r1 + "&reviewer2=" + r2 + "&processId=" + id,r1)
  }
}
