import { Injectable } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ProxyConfigService } from '../services/proxy.config.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { ApiUrl } from '../services/apiUrl.service';


@Injectable()
export class notificationService {
  private actionUrl: string;
  constructor(private _http: Http, private apiUrl: ApiUrl) {
    this.actionUrl = apiUrl.ApiServer;
  }

  public getAll = (): Observable<any[]> =>  {
    return this._http.get(this.actionUrl + "/BranchProduct/id2/1")
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  public noti_amount1 = ( obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/setting/notification/amount1" , obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
  public noti_amount2 = ( obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/setting/notification/amount2" ,  obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
  public noti_amount3 = ( obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/setting/notification/amount3" ,obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
  public noti_exp1 = ( obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/setting/notification/exp1" , obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
  public noti_exp2 = ( obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/setting/notification/exp2" , obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
  public noti_exp3 = ( obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/setting/notification/exp3" ,  obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
}
