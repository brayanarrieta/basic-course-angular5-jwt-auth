import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8000/api/users').pipe();
  }

}
