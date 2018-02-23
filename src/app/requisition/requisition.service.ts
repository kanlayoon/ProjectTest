import { Injectable } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ProxyConfigService } from '../services/proxy.config.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { ApiUrl } from '../services/apiUrl.service';


@Injectable()
export class RequisitionService {
  private actionUrl: string;
  constructor(private _http: Http, private apiUrl: ApiUrl) {
    this.actionUrl = apiUrl.ApiServer;
  }

  public get_AllReq = (): Observable<any[]> =>  {
    return this._http.get(this.actionUrl + "/AllReq")
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  public check = (Pcode): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.actionUrl + "/checkReq/" + Pcode , options)
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
  public getBranch = (): Observable<any[]> =>  {
    return this._http.get(this.actionUrl + "/Branch")
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  public get_amount = (obj:any): Observable<any[]> =>  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.actionUrl + "/reqAmount/" , obj,options)
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  public supplyReq = (obj:any): Observable<any[]> =>  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/inputAmount/" , obj,options)
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }

}
