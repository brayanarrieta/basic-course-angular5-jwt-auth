import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "./auth/auth.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8000/api/users').pipe();
  }

}
