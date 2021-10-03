import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http:HttpClient) { }
  
  FilterByCategory(cat:string)
  {
    return this.http.get("http://localhost:23441/api/Filter/FilterByCategory?cname="+cat)
  }
}