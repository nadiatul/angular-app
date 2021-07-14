import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Part1Service {
  constructor(private http: HttpClient) { }

  getDistrictManagerService() {
     return this.http.get('http://www.mocky.io/v2/5d73bf3d3300003733081869');
  }
}

