import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Authorization} from '../auth/authorization';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public token = this.authService.getAuthorization().getValue();;
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }

}
