import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url = 'http://localhost:8080/api/experience/'

  constructor(private http: HttpClient) { }

  //Métodos de MGB

  public newExp(exp: Experience): Observable<any> {
    return this.http.post<any>(this.url + 'new', exp);
  }

  public editExp(id: number, exp: Experience): Observable<any> {
    return this.http.put<any>(this.url + `edit/${id}`, exp);
  }

  public deleteExp(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

  public getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }

  public searchEx(id: number): Observable<Experience> {
    return this.http.get<Experience>(this.url + `${id}`)
  }



  //Métodos AP
  /*
  getExperiences(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public detail(id: number): Observable<any> {
    return this.http.get<any>(this.url + `${id}`);
  }
  */
}
