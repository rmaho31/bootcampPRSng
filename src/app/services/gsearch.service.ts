import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GsearchService {

  constructor(private http: HttpClient) { }

  googleS(term: string): Observable<any> {
		return this.http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyBFX0-8G0ELQvquds8wDc8eKljSqQcvOAg&cx=017743434093706287573:gnv3ymxvam8&q="+term) as Observable<any>;
  }

}
