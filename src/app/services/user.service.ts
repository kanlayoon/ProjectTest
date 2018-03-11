// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions} from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

// @Injectable()
// export class UserService {
//   constructor(private _http: Http) { }

//   get(url: string): Observable<any> {
//     return this._http.get(url)
//       .map((response: Response) => <any>response.json())
//       // .do(data => console.log("All: " + JSON.stringify(data)))
//       .catch(this.handleError);
//   }

//   post(url: string, model: any): Observable<any> {
//     let body = JSON.stringify(model);
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this._http.post(url, body, options)
//       .map((response: Response) => <any>response.json())
//       .catch(this.handleError);
//   }

//   put(url: string, id: number, model: any): Observable<any> {
//     let body = JSON.stringify(model);
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this._http.put(url+id, body, options)
//       .map((response: Response) => <any>response.json())
//       .catch(this.handleError);
//   }

//   delete(url: string, id: number): Observable<any> {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this._http.delete(url+id,options)
//       .map((response: Response) => <any>response.json())
//       .catch(this.handleError);
//   }

//   private handleError(error: Response) {
//     console.error(error);
//     return Observable.throw(error.json().error || 'Server error');
//   }

// }

import { ApiService } from '../services/api.service';
import { ProxyConfigService } from '../services/proxy.config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { ApiUrl } from '../services/apiUrl.service';

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user';

// @Injectable()
// export class UserService {
//     private actionUrl: string;
//     constructor(private _http: Http, private apiUrl: ApiUrl) {
//         this.actionUrl = apiUrl.ApiServer;
//       }

//     getAll() {
//         return this._http.get<User[]>('/api/users');
//     }
    @Injectable()
    export class UserService {
      private actionUrl: string;
      constructor(private _http: Http, private apiUrl: ApiUrl) {
        this.actionUrl = apiUrl.ApiServer;
      }
    
      public getAll = (): Observable<any[]> =>  {
        return this._http.get(this.actionUrl + "/users")
        .map( (response: Response) => <any>response.json() )
        .do( x => console.log(x));
      }
     
    
    }
//     getById(id: number) {
//         return this.http.get('/api/users/' + id);
//     }

//     create(user: User) {
//         return this.http.post('/api/users', user);
//     }

//     update(user: User) {
//         return this.http.put('/api/users/' + user.id, user);
//     }

//     delete(id: number) {
//         return this.http.delete('/api/users/' + id);
//   }

// import { Injectable } from '@angular/core';

// import { ApiService } from '../services/api.service';
// import { ProxyConfigService } from '../services/proxy.config.service';
// import { Headers, Http, RequestOptions, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// import { ApiUrl } from '../services/apiUrl.service';


// @Injectable()
// export class UserService {
//   private actionUrl: string;
//   constructor(private _http: Http, private apiUrl: ApiUrl) {
//     this.actionUrl = apiUrl.ApiServer;
//   }

//   public getAll = (): Observable<any[]> =>  {
//     return this._http.get(this.actionUrl + "/users")
//     .map( (response: Response) => <any>response.json() )
//     .do( x => console.log(x));
//   }
  
// }
