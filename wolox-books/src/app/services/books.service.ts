import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private ROOT_URL;
  
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService) { 
    this.ROOT_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  };

  obtainBooks = () => this.http.get(this.ROOT_URL + '/books');

  obtainBookDetail = (id) => this.http.get(this.ROOT_URL + '/books/' + id);
  
}
