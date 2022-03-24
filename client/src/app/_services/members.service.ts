import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

//pentru a permite autorizarea
const httpOptions = {
  headers: new HttpHeaders({
    //daca nu merge, rulez apicatia si trebuie sa am in inspect->application->tokenul
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
    //Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhbmNhIiwibmJmIjoxNjQ3OTU1MTYzLCJleHAiOjE2NDg1NTYzNjMsImlhdCI6MTY0Nzk1NTE2M30.DRFdB-l_cCXBoo0JAxpqwJ3brKDRUtvVpHOgS_9LqM-WlRDc46HAhNWNn_hDKU-HTfu0asJykLxofSAnY6ma9A'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
  }

  getMember(id: number){
    return this.http.get<Member[]>(this.baseUrl + 'users/' + id, httpOptions);
  }
  /*
  getMember(username: string){
    return this.http.get<Member[]>(this.baseUrl + 'users/' + username, httpOptions);
  }*/
}
