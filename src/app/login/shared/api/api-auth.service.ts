import { ProxyConfigService } from './../helpers/proxy.config.service';
import { Observable } from 'rxjs/Observable';
import { environment } from './../../../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiAuthService {
  constructor(private _http: Http, private _proxy: ProxyConfigService) {}

  isTokenValid(token: string): Observable<boolean> {
    let headers = new Headers({ 'Authorization': 'bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    let url = this._proxy.api.url + '/api/account/valid';
    return this._http.get(url, options)
      .map((response) => {
        return true;
      }).catch((error: any) => {
        return Observable.throw(error.status);
      });
  }
}
