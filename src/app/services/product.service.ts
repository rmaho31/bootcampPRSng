import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../classes/product'
import { JsonResponse } from '../util/json-response.class'

const url: string = 'http://localhost:8080/Products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  login(product: Product): Observable<JsonResponse> {
		return this.http.post(url+"Authenticate", product) as Observable<JsonResponse>;
  }
  
  list(): Observable <JsonResponse> {
    return this.http.get(url+"List") as Observable<JsonResponse>;
  }

  add(product: Product): Observable<JsonResponse> {
      return this.http.post(url+"Add", product) as Observable<JsonResponse>;
  } 
  
  get(id): Observable<JsonResponse> {
    return this.http.get(url+"Get/"+id) as Observable<JsonResponse>;
  }
  
  remove(product: Product): Observable<JsonResponse> {
      return this.http.post(url+"Remove", product) as Observable<JsonResponse>;
  }
  
  change(product: Product): Observable<JsonResponse> {
		return this.http.post(url+"Change", product) as Observable<JsonResponse>;
  }
  
  constructor(private http: HttpClient) { }
}
