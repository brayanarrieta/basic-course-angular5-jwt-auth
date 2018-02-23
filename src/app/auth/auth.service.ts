import { Injectable } from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Authorization} from './authorization';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AuthService {
  private authorization = new BehaviorSubject<Authorization>(null);
  constructor(private router: Router, private httpClient: HttpClient) { }


  getAuthorization(): BehaviorSubject<Authorization> {
    return this.authorization;
  }

  setAuthorization(auth: Authorization) {
    this.authorization.next(auth);
  }
  login(user: User): void {
    this.httpClient.post<Authorization>('http://localhost:8000/api/auth/login', user, httpOptions)
      .subscribe(
        (data) => {
          this.setAuthorization(data);
          this.router.navigate(['/home']);
        },
        (error ) => console.error(error)
      );
  }
  logout() {
    this.authorization.next(null);
    this.router.navigate(['/login']);
  }
}
