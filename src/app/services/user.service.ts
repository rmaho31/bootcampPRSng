import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user'
import { JsonResponse } from '../util/json-response.class'

const url: string = 'http://localhost:8080/Users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  login(user: User): Observable<JsonResponse> {
		return this.http.post(url+"Authenticate", user) as Observable<JsonResponse>;
  }
  
  list(): Observable <JsonResponse> {
    return this.http.get(url+"List") as Observable<JsonResponse>;
  }

  add(user: User): Observable<JsonResponse> {
      return this.http.post(url+"Add", user) as Observable<JsonResponse>;
  } 
  
  get(id): Observable<JsonResponse> {
    return this.http.get(url+"Get/"+id) as Observable<JsonResponse>;
  }
  
  remove(user: User): Observable<JsonResponse> {
      return this.http.post(url+"Remove", user) as Observable<JsonResponse>;
  }
  
  change(user: User): Observable<JsonResponse> {
		return this.http.post(url+"Change", user) as Observable<JsonResponse>;
  }
  
  constructor(private http: HttpClient) { }

}
