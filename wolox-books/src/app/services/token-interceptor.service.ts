import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor( 
    private injector: Injector
  ){};

  intercept(req,next) {
    let userService = this.injector.get(UserService);
    const token = userService.getToken();
    if (token) {
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
