import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { ProxyConfigService } from './proxy.config.service'
import { SharedAuthService } from './shared-auth.service';
// import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

const enum Method{
  Get = 1,
  Post = 2,
  Path = 3,
  Put = 4,
  Delete = 5
}
// const API_URL = environment.apiUrl;
@Injectable()
export class ApiService {
  s: string = "http://localhost:55202";
  constructor(private _http: Http, private _proxy: ProxyConfigService, private _sharedAuthService: SharedAuthService) {  }

  private url(url: string): string{
    // return  `${this._proxy.api.url}/api${url}`;
    return  `${this.s}/api${url}`;
  }
  
  private executeResponse(method: Method, url: string, values: any, subject = new Subject<any>()): Observable<any>{
    let token = localStorage.getItem('access_token');
    if(!token) token='';
    let headers = new Headers({'Authorization': 'bearer ' + token });
    // headers.append('Access-Control-Allow-Origin','*');
    let options = new RequestOptions({ headers: headers });
    let response: Observable<Response>;

    switch(method){
      case Method.Get:
        response = this._http.get(this.url(url) + values, options);
        break;
    }

    response.map( result => {
      if(result){
        if(result.status == 200){
          return result.json();
        }
      }
    }).catch( error => {
      if(error.status == 401){
        this._sharedAuthService.authentication.next(false);
        let subscriber = this._sharedAuthService.token.subscribe( token => {
          subscriber.unsubscribe();
          this.executeResponse(method, url, values, subject );
        });
        return Observable.of([]);
      }
      else {
        throw Observable.throw(error);
      }
    }).subscribe( result => subject.next(result));
    return subject;    
  }

  authGetRequest( url: string, values? : { [id: string]: any }): Observable<any>{
    let params ='';
    if( values ) 
      params = '?' + this.encodeParams(values);
    return this.executeResponse(Method.Get,  url, params)
  }

  encodeParams(values: {[id:string]: string}): string{
      return Object.keys(values).map( (k) =>{
        return `${k}=${values[k]}`;
      }).join('&');
  }

}