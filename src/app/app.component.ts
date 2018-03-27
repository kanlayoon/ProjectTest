import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedAuthService } from './login/shared/helpers/shared-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name = 'Angular'; 
   constructor(
    private sharedAuthService: SharedAuthService,
    private router: Router
  ){}
}







