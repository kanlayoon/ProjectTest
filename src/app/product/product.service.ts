import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ApiService } from '../services/api.service';
import { ProxyConfigService } from '../services/proxy.config.service';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { ApiUrl } from '../services/apiUrl.service';


@Injectable()
export class ProductService {
  private actionUrl: string;
  constructor(private _http: Http, private apiUrl: ApiUrl) {
    this.actionUrl = apiUrl.ApiServer;
  }

  public getAll = (): Observable<any[]> =>  {
    return this._http.get(this.actionUrl + "/BranchProduct/id2/1")
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  
  public del = (id): Observable<any> => {
   
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    // headers.delete('Access-Control-Allow-Headers: X-Requested-With');
    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append("Access-Control-Allow-Methods", "*");
    let options = new RequestOptions({ headers: headers });
    let body = {}
    return this._http.post(this.actionUrl + "/Product/del/" + id, body )
    

    // return this._http.delete('http://localhost:55202/api/product/del/' + id, options)
    .map( (response: Response) => <any>response.json() )   
    .do( x => console.log(x));
    
  }
  public update = (update_string, obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/Product/update/" + update_string, obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));   
  }
  public getAllT = (): Observable<any[]> =>  {
    return this._http.get(this.actionUrl + "/ProductTypes")
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  public sp_insert_Product = (insert_p, obj:any): Observable<any> => {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.actionUrl + "/Product/insert/" + insert_p, obj, options )
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  public getAllType = (): Observable<any[]> =>  {
    return this._http.get(this.actionUrl + "/ProductTypes")
    .map( (response: Response) => <any>response.json() )
    .do( x => console.log(x));
  }
  
}
