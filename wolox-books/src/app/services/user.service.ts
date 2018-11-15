import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ROOT_URL;
  
  constructor(private http:HttpClient) { 
    this.ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  };
  
  registerUser = (user) => {
    console.log({user});
    return this.http.post(this.ROOT_URL + '/users', { user });
  }

  logUser = (session) => {
    console.log({session});
    return this.http.post(this.ROOT_URL + '/users/sessions', { session });
  }
}
