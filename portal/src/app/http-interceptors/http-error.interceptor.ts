import { finalize, tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../services/auth';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private snackbar: MatSnackBar) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let httpErrorResponse: HttpErrorResponse;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => httpErrorResponse = null,
          // Operation failed; error is an HttpErrorResponse
          error => httpErrorResponse = error
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          if (httpErrorResponse) {
            const message = httpErrorResponse.status === 0
              ? 'server is unavailable'
              : `${ httpErrorResponse.status } ${ httpErrorResponse.statusText }`;
            if (httpErrorResponse.status === 401) {
              this.snackbar.open('Your session has expired, please login again', 'X', {
                duration: 5000
              });
              this.authService.logout(false);
            } else if (httpErrorResponse.status !== 400) {
              this.snackbar.open(`An HTTP error has occurred: ${ message }`, 'X', {
                duration: 5000
              });
            }
          }
        })
      );
  }
}
