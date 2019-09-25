import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, RoleGuard } from './services';

// --- PAGES --- //
import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  LoginComponent,
  ProfileComponent,
  SingleSpaComponent
} from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'single-spa', component: SingleSpaComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'} },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, RoleGuard]
})
export class AppRoutingModule {
}
