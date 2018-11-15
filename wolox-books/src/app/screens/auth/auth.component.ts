import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(
    private router:Router,
    private localStorageService:LocalStorageService
  ) { }

  closeSession = () => {
    this.localStorageService.clearStorage();
    this.router.navigate(['']);
  }
}
