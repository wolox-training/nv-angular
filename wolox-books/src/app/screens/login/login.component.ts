import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  logForm: FormGroup;
  session = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private localStorageService: LocalStorageService
    ) {
      this.logForm = fb.group({
        "email": null,
        "password": null
      });
    }

  redirectRegister = () => {
    this.router.navigate(['unauth/sign-up']);
  }

  openSession = () => {
    const response = this.userService.logUser(this.session);    
    response.subscribe( data => {
      const token = JSON.parse(JSON.stringify(data)).access_token;
      if (token) {
        this.localStorageService.setValue('token', token);
        this.router.navigate(['auth']);
      }
    });

  }
}
