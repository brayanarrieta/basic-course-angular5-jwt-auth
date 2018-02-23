import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Authorization} from '../auth/authorization';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: User[];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getUsers()
      .subscribe((data) => this.users = data, (error) => console.error(error));
  }
}
