// import { Injectable } from '@angular/core';
// import { managers } from './manager.model';
// import { ApiService } from '../services/api.service';
// import { ProxyConfigService } from '../services/proxy.config.service';
// import { Headers, Http, RequestOptions, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// import { ApiUrl } from '../services/apiUrl.service';


// @Injectable()
// export class ManagerService {
//   private actionUrl: string;
//   constructor(private _http: Http, private apiUrl: ApiUrl) {
//     this.actionUrl = apiUrl.ApiServer;
//   }

//   public getAll = (): Observable<any[]> =>  {
//     return this._http.get(this.actionUrl + "/Products")
//     .map( (response: Response) => <any>response.json() )
//     .do( x => console.log(x));
//   }

    


// }
