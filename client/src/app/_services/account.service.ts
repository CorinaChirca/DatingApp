import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'http://localhost:5000/api/';
  //ReplaySubjecte un fel de buffer, se pastreaza valorile, (1) e lungimea bufferului(cate valori se retin)
  private currentUserSource = new ReplaySubject<User>(1);
  //deoarece va fi un observable adaugam $
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  //primeste credentialele din form-ul de login, response e de tip User(interface din folderul _models)
  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if( user ){
          localStorage.setItem('user',JSON.stringify(user));
          //setez cu user valoarea lui currentUserSource
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user : User) => {
        if(user) {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    //setez cu null valoarea lui currentUserSource
    this.currentUserSource.next(null);
  }
}
