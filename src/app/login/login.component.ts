import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  constructor(private apiservice: ApiService) { }
  public values: Observable<any[]>;
  ngOnInit() {
      
  }

}







