import { Injectable } from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Authorization} from './authorization';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AuthService {
  private cachedRequests: Array<HttpRequest<any>> = [];
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
  refresh(): void {
    this.httpClient.post<Authorization>('http://localhost:8000/api/auth/refresh', null, httpOptions )
      .subscribe(
        (data) => {
          this.setAuthorization(data);
        },
        (error ) => console.error(error)
      );
  }
  logout() {
    this.authorization.next(null);
    this.router.navigate(['/login']);
  }
  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }
  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
