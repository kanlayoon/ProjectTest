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
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {  AuthenticationService } from '../services/Authentication.service';
import { AlertService} from '../services/Alert.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}







