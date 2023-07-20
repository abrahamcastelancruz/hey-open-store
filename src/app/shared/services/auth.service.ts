import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: any): Observable<any> {
    const path = `${environment.REGISTER_URL}`;
    return this.http.
      post<any>(path, user)
      .pipe(catchError((error) => throwError(error)));
  }

  public login(user: any): Observable<any> {
    const path = `${environment.LOGIN_URL}`;
    return this.http.
      post<any>(path, user)
      .pipe(catchError((error) => throwError(error)));
  }
}
