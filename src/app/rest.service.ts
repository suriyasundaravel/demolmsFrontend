import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }
 public domainURL : string = "http://localhost:3000/"
//   getUsers()
// {
//     return this.http.get(this.url);
// }
}
