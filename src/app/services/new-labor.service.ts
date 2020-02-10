import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewLaborService {

  constructor(private httpClient: HttpClient) { }

  getMagazines(){
        return this.httpClient.get("http://localhost:8080/process/magazines") as Observable<any>;
  }
}
