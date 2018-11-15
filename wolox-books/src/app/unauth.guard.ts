import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class UnauthGuard implements CanActivate {
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate = ():boolean => {
    if (!this.userService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
