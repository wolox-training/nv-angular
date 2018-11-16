import { Component, OnInit, Testability } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { BooksService } from '../../services/books.service';
import { LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  bookID: number;
  bookDetail: any;

  constructor(private router:Router,
    private localStorageService:LocalStorageService,
    private route:ActivatedRoute,
    private booksService:BooksService) {
    this.route.params.subscribe(res => this.bookID = res.id);
   }

  ngOnInit() {
    this.booksService.obtainBookDetail(this.bookID).subscribe( data => {this.bookData(data)} );
  }

  bookData = (data) => {
    this.bookDetail = data;
  }

  closeSession = () => {
    this.localStorageService.clearStorage();
    this.router.navigate(['unauth']);
  }

  returnBooks = () => {
    this.router.navigate(['/books']);
  }
}
