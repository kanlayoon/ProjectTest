// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../services/api.service';
// import { HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Router, ActivatedRoute } from '@angular/router';
 
// import {AuthenticationService } from '../services/Authentication.service';

// @Component({
//   selector: 'login',
//   templateUrl: `./login.component.html`,
//   styleUrls: ['./login.component.css'],
//   providers: [ApiService]
// })
// export class LoginComponent implements OnInit {
//   constructor(private apiservice: ApiService) { }
//   public values: Observable<any[]>;
//   ngOnInit() {
      
//   }

// }
// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

// import {  AuthenticationService } from '../services/Authentication.service';
// import { AlertService} from '../services/Alert.service';

// @Component({
//     moduleId: module.id,
//     templateUrl: 'login.component.html'
// })

// export class LoginComponent implements OnInit {
//     model: any = {};
//     loading = false;
//     returnUrl: string;

//     constructor(
//         private route: ActivatedRoute,
//         private router: Router,
//         private authenticationService: AuthenticationService,
//         private alertService: AlertService) { }

//     ngOnInit() {
//         // reset login status
//         this.authenticationService.logout();

//         // get return url from route parameters or default to '/'
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//     }

//     login() {
//         this.loading = true;
//         this.authenticationService.login(this.model.username, this.model.password)
//             .subscribe(
//                 data => {
//                     this.router.navigate([this.returnUrl]);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }
// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
 
// import { AlertService, AuthenticationService } from '../login/_services/index';
 
// @Component({
//     moduleId: module.id,
//     templateUrl: 'login.component.html'
// })
 
// export class LoginComponent implements OnInit {
//     model: any = {};
//     loading = false;
//     returnUrl: string;
 
//     constructor(
//         private route: ActivatedRoute,
//         private router: Router,
//         private authenticationService: AuthenticationService,
//         private alertService: AlertService) { }
 
//     ngOnInit() {
//         // reset login status
//         this.authenticationService.logout();
 
//         // get return url from route parameters or default to '/'
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//     }
 
//     login() {
//         this.loading = true;
//         this.authenticationService.login(this.model.username, this.model.password)
//             .subscribe(
//                 data => {
//                     this.router.navigate([this.returnUrl]);
//                 },
//                 error => {
//                     this.alertService.error(error._body);
//                     this.loading = false;
//                 });
//     }
// }

import { AuthService } from './shared/api/auth.service';
import { ProxyConfigService } from './shared/helpers/proxy.config.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiAuthService } from './shared/api/api-auth.service';
import { SharedAuthService } from './shared/helpers/shared-auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

// import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _sharedAuthService: SharedAuthService,
    private _authService: AuthService,
    private _router: Router,
    private _proxy: ProxyConfigService,
    private route: ActivatedRoute,
    private router: Router) { }

  url = '';
  valid = true;
  expired = false;
  sub;
  error = false;
  errorMsg = "";

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.url = params['url'];
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(username: string, password: string) {
    this._authService.getToken(username, password).subscribe(
      (token) => {
        if (token) {
          this._sharedAuthService.token.next(token);
          if (this.url) {
            this.router.navigate(['/' + this.url]);
          } else {
            this.router.navigate(['/overview']);
          }
        }
      },
      (error) => {
        if(error.status == 400){
          let errorObj = JSON.parse(error._body);

          this.error = true;
          this.errorMsg = errorObj.error_description;
        }
      }
    );
  }
}






