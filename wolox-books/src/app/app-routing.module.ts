import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'books',
        component: BookListComponent
      }
    ]
  },
  {
    path: 'unauth',
    canActivate: [UnauthGuard],
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    canActivate: [UnauthGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
