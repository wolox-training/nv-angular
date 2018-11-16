import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ROOT_URL;
  
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService) { 
    this.ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  };
  
  registerUser = (user) => this.http.post(this.ROOT_URL + '/users', { user });
  
  logUser = (session) => this.http.post(this.ROOT_URL + '/users/sessions', { session });
  
  loggedIn = () => !!this.localStorageService.getValue('token');

  getToken = () => this.localStorageService.getValue('token');
}