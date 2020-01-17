import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  categories = [];
  languages = [];
  books = [];

  constructor(private httpClient: HttpClient) {


  }

  startProcess(){
    return this.httpClient.get('http://localhost:8080/welcome/get') as Observable<any>
  }

  getTasks(processInstance : string){

    return this.httpClient.get('http://localhost:8080/process/tasks/'.concat(processInstance)) as Observable<any>
  }

  claimTask(taskId){
    return this.httpClient.post('http://localhost:8080/process/claim/'.concat(taskId), null) as Observable<any>
  }

  completeTask(taskId){
    return this.httpClient.post('http://localhost:8080/process/complete/'.concat(taskId), null) as Observable<any>
  }

}
