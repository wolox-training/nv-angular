import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any;
  bookDetail: any;

  constructor(
    private router:Router,
    private localStorageService:LocalStorageService,
    private booksService:BooksService
  ) { }

  ngOnInit() {
    this.booksService.obtainBooks().subscribe( data => this.books = data);
    this.booksService.obtainBooks().subscribe( data => console.log(data));
  }

  closeSession = () => {
    this.localStorageService.clearStorage();
    this.router.navigate(['unauth']);
  }

  openDetail = (id) => {
    this.router.navigate([`/books/${id}`]);
  }
}
