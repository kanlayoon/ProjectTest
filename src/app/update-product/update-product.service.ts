import { Injectable } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ProxyConfigService } from '../services/proxy.config.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { ApiUrl } from '../services/apiUrl.service';


@Injectable()
export class UpdateService {
  private actionUrl: string;
  constructor(private _http: Http, private apiUrl: ApiUrl) {
    this.actionUrl = apiUrl.ApiServer;
  }
  
  public update = (update_string): Observable<any> => {
    return this._http.post(this.actionUrl + "/Product/u/" + update_string )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  public getAll = (): Observable<any[]> =>  {
    return this._http.get(this.actionUrl + "/ProductTypes")
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }

}
    




