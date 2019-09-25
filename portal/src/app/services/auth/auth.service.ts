import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

import { IUser, IUserToken } from '../users/interfaces';

const LOCAL_STORAGE = '_data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  changedToken = new Subject<string>();

  constructor(private router: Router,
              private snackbar: MatSnackBar,
              private http: HttpClient) {
  }

  login(email: string, password: string): void {
    const url = '/api/login';
    this.http
      .post(url, { email, password }).subscribe((data: IUserToken) => {
        this._setLocalStorage(data);
        this.router.navigate(['/']);
        this.snackbar.open(`You have successfully logged in as ${ data.user.role }.`, 'X', {
          duration: 5000
        });
      },
      error => {
        console.error(error);
        this.snackbar.open('Invalid credentials, please try again.', 'X', {
          duration: 5000
        });
      });
  }

  logout(snackbar: boolean = true): void {
    this._clearLocalStorage();
    this.router.navigate(['/login']);
    if (snackbar) {
      this.snackbar.open('You have successfully logged out.', 'X', {
        duration: 5000
      });
    }
  }

  get token(): string {
    const str = localStorage.getItem(LOCAL_STORAGE);
    if (str) {
      const data: IUserToken = JSON.parse(str);
      return data.token;
    } else {
      return null;
    }
  }

  get currentUser(): IUser {
    const str = localStorage.getItem(LOCAL_STORAGE);
    if (str) {
      const data: IUserToken = JSON.parse(str);
      return data.user;
    } else {
      return null;
    }
  }

  _setLocalStorage(data: IUserToken): void {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(data));
    this.changedToken.next(data.token);
  }

  _clearLocalStorage(): void {
    localStorage.removeItem(LOCAL_STORAGE);
    this.changedToken.next(null);
  }

}
