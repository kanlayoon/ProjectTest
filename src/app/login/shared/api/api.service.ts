import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { SharedAuthService } from './../helpers/shared-auth.service';
import { ProxyConfigService } from './../helpers/proxy.config.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  constructor(private _http: Http, private _proxy: ProxyConfigService, private _sharedAuthService: SharedAuthService) { }

  private url(url: string): string {
    return `${this._proxy.api.url}/api${url}`;
  }

  private executeResponse(method: Method, url: string, values: any, subject = new Subject<any>()): Observable<any> {
    let token = localStorage.getItem('access_token');
    if (!token)
      token = '';
    let headers = new Headers({ 'Authorization': 'bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    let response: Observable<Response>;

    switch(method) {
      case Method.Get:
        response = this._http.get(this.url(url) + values, options);
        break;
      case Method.Post:
        options.headers.append('Content-Type', 'application/json');
        response = this._http.post(this.url(url), JSON.stringify(values), options);
        break;
      case Method.Path:
        response = this._http.get(this.url(url) + values, options);
        break;
      case Method.Put:
        options.headers.append('Content-Type', 'application/json');
        response = this._http.put(this.url(url), JSON.stringify(values), options);
        break;
      case Method.Delete:
        response = this._http.delete(this.url(url) + values, options)
        break;
    }

    response.map(result => {
      if (result) {
        if (result.status == 200) {
          return result.json();
        }
      }
    }).catch(error => {
      if (error.status == 401) {
        this._sharedAuthService.authentication.next(false);
        let subscriber = this._sharedAuthService.token.subscribe(token => {
          subscriber.unsubscribe();
          this.executeResponse(method, url, values, subject);
        });
        return Observable.of([]);
      }
      else {
        throw Observable.throw(error);
      }
    }).subscribe(result => subject.next(result));
    return subject;
  }

  authGetRequest(url: string, values?: { [id: string]: any }): Observable<any> {
    let params = '';
    if (values)
      params = '?' + this.encodeParams(values);
    return this.executeResponse(Method.Get, url, params);
  }

  authPostRequest(url: string, values: { [id: string]: any }): Observable<any> {
    return this.executeResponse(Method.Post, url, values);
  }

  authPathRequest(url: string, value: string, params: { [id: string]: string } = undefined): Observable<any> {
    let query = '';
    if (value)
      query = '/' + value;
    if (params)
      query += '?' + this.encodeParams(params);
    return this.executeResponse(Method.Path, url, query);
  }

  authPutRequest(url: string, values: { [id: string]: any }): Observable<any> {
    return this.executeResponse(Method.Put, url, values);
  }

  authDeleteRequest(url: string, value: string) {
    let param = '';
    if (value)
      param = '/' + value;
    return this.executeResponse(Method.Delete, url, param);
  }

  encodeParams(values: { [id: string]: string }): string {
    return Object.keys(values).map((k) => {
      return `${k}=${values[k]}`;
    }).join('&');
  }
}

const enum Method {
  Get = 1,
  Post = 2,
  Path = 3,
  Put = 4,
  Delete = 5
}