import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {

  constructor(public http: HttpClient ) {
  }

  signin(form) {
    return this.http.post('http://localhost:8000/api/signin', {
        email: form.value.email,
        password: form.value.password
      },
      {observe: 'response'}
    )
      // {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
    .map((resp: HttpResponse<any>) => {
      // Gettin token
      const token = resp.body.token;
      const status = resp.status;
      // Gettin second part of 3 of the token
      const base64Data = token.split('.')[1];
      // Replacing necessary symbols to match base64 encoded string
      const base64 = base64Data.replace('-', '+').replace('_', '/');
      // Retirnung Object with data encoded from base64
      return {status, token, tokenData: JSON.parse(window.atob(base64))};
    })
    // You can check storage state in Developer Tool section Storage -> LocalStorage
    .do(tokenObj => localStorage.setItem('token', tokenObj.token))
    .toPromise();

  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): Promise<any> {
    const token: string = this.getToken();
    return this.http.post('http://localhost:8000/api/authenticated?token=' + token, '', {observe: 'response'})
      .toPromise();
  }

  signOut(): Promise<object> {
    const token: string = this.getToken();
    return this.http.post('http://localhost:8000/api/signout?token=' + token, '')
      .toPromise();
  }
}
