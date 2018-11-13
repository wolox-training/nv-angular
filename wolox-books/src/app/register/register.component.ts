import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = fb.group({
      "email": [null, Validators.compose([Validators.required])],
      "password": [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
      "password_confirmation": [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
      "first_name": [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      "last_name": [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      "locale": "en"
    })
  }

  ngOnInit() {
  }

  registerUser = (newUser) => {
    if(newUser.password === newUser.password_confirmation) {
      console.log(newUser);
    }
  }
}
