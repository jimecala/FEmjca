import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/api/experience';

  public getData(): Observable<any> {
    return this.http.get(`${this.url}/getAll`)
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.url}/post`, data)
  }

  updateData(data: any): Observable<any> {
    return this.http.put(this.url, data)
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`)
  }
}
