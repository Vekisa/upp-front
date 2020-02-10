import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewMagazineService {

  constructor(private httpClient: HttpClient) { }

   newMagazine(magazine, taskId) {
      return this.httpClient.post("http://localhost:8080/process/post_magazine/".concat(taskId), magazine) as Observable<any>;
   }

   getScientificAreas(){
      return this.httpClient.get("http://localhost:8080/process/scientific_areas") as Observable<any>;
   }

   addScientificAreas(list : any, id :string){
      return this.httpClient.post("http://localhost:8080/process/add_scientific_areas?processId=" + id,list) as Observable<any>;
   }
}
