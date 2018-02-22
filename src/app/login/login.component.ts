import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user: User = new User('ryanchenkie@gmail.com', 'secret');
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    // if (this.form.valid) {
    //   this.authService.login(this.form.value);
    // }
    this.authService.login(this.form.value);
  }

}
