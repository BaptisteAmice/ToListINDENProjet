import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
      inject(AuthGuard).canActivate(next, state)], },
    {
      path: 'users',
      component: UsersListComponent,
      //canActivate: [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        //inject(AuthGuard).canActivate(next, state)],
      },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
