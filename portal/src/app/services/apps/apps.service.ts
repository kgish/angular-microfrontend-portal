import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IApp } from './apps.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IApp[]> {
    const url = '/api/apps';
    return this.http.get<IApp[]>(url);
  }
}
