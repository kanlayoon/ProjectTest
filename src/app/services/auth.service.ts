import { ProxyConfigService } from './proxy.config.service';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private valid = false;
  redirectUrl: string;

  constructor(private _http: Http, private _proxy: ProxyConfigService) {
    this.valid = !!localStorage.getItem('access_token');
  }

  validate(ott: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this._proxy.api.url + '/api/account/validateott';
    return this._http.post(url, JSON.stringify(ott), options)
      .map((res) => {
        if (res) {
          if (res.status == 200) {
            let result = res.json()
            if (result.success) {
              localStorage.setItem('access_token', result.access_token);
              this.valid = true;
              return true;
            }
          }
        }
      }).catch((err: any) => {
        return Observable.throw(new Error(err.status));
      });
  }

  getToken(username: string, password: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    let body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);

    let url = this._proxy.api.url + '/Token';
    return this._http.post(url, body.toString(), options)
      .map((res) => {
        if (res) {
          if (res.status == 200) {
            let result = res.json()
            if (result.access_token) {
              return result.access_token.toString();
            }
          }
        }
      }).catch((error: any) => {
          return Observable.throw(error);
      });
  }

  logout() {
    localStorage.removeItem('access_token');

    let body = new URLSearchParams();
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    let url = this._proxy.api.url + '/api/Logout';
    return this._http.post(url, body.toString(), options)
      .map((res) => {
        if (res) {
          if (res.status == 200) {

          }
        }
      }).catch((err: any) => {
        return Observable.throw(new Error(err.status));
      });
  }

  isValid() {
    return this.valid;
  }
}
