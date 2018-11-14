import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { email, password, name } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = fb.group({
      "email": email,
      "password": password,
      "password_confirmation": password,
      "first_name": name,
      "last_name": name,
      "locale": "en"
    });
  }

  registerUser = (newUser) => {
    if(newUser.password === newUser.password_confirmation) {
      console.log(newUser);
    }
  }
}
