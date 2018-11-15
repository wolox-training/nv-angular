import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  constructor(
    private router:Router,
    private localStorageService:LocalStorageService
  ) { }

  closeSession = () => {
    this.localStorageService.clearStorage();
    this.router.navigate(['unauth']);
  }
}
