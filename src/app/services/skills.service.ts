import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from "src/app/models/skills.model";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url: string = "http://localhost:8080/api/skills";

  constructor(private http: HttpClient) { }

  //LO MISMO DE ABAJO PERO CAMBIANDO LA URL
  /*getData():Observable<any>{
    return this.http.get<any>(this.url+`${"skills"}`);
  }

  public list():Observable<any>{
    return this.http.get<any>(this.url+`${"skills"}`);
  }*/

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public list(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.url + 'delete/' + id);
  }

  public newSkill(skills: Skills): Observable<any> {
    return this.http.post<any>(this.url + 'new', skills);
  }

  public detail(id: number): Observable<any> {
    return this.http.get<any>(this.url + `${id}`);
  }

  public editSkill(skills: any): Observable<any> {
    return this.http.put<any>(this.url + 'edit', skills);
  }

}
