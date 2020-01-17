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
  startProcessNewMagazine(){
        return this.httpClient.get(this.basicPath + "/process/get_magazine") as Observable<any>;
      }
}
