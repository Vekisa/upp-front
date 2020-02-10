import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private basicPath = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  startProcess(){
      return this.httpClient.get(this.basicPath + "/auth/get") as Observable<any>;
    }
  startProcessLabor(){
          return this.httpClient.get(this.basicPath + "/process/get_labor") as Observable<any>;
  }
  startProcessNewMagazine(){
        return this.httpClient.get(this.basicPath + "/process/get_magazine") as Observable<any>;
  }

  postNewLabor(object, taskId) {
      return this.httpClient.post("http://localhost:8080/process/post_labor/".concat(taskId), object) as Observable<any>;
  }

  refreshLabor(processId) {
        return this.httpClient.get("http://localhost:8080/process/refresh_labor/".concat(processId)) as Observable<any>;
    }
}
