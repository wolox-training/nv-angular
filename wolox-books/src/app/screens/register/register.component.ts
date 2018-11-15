import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { email, password, name } from '../../validators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  regForm: FormGroup;
  user = {
    locale: "en"
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {
    this.regForm = fb.group({
      "email": email,
      "password": password,
      "password_confirmation": password,
      "first_name": name,
      "last_name": name,
      "locale": "en"
    });
  };

  createUser = () => {
    console.log(this.user);
    const response = this.userService.registerUser(this.user);    
    response.subscribe(() => console.log('success'));
    this.router.navigate(['login']);
  };

  redirectLogin = () => {
    this.router.navigate(['login']);
  }
}
