import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedAuthService {
  public static waiting: boolean = false;
  authentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  token: ReplaySubject<string> = new ReplaySubject<string>();

  constructor() {
    this.token.subscribe(token => {
      localStorage.setItem('access_token', token);
    });
  }
}
