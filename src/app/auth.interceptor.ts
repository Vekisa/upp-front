import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model'

import { AutheticationService } from './services/authetication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AutheticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.getUser();
        if (this.authenticationService.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Basic ${" + window.btoa(currentUser.username + ":" + currentUser.password) + "}"
                }
            });
        }

        return next.handle(request);
    }
}
