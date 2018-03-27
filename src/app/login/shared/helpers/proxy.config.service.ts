import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProxyConfigService {
    api: {
        url: string
    }

    constructor(private _http: Http) {}

    load() {
        return new Promise((resolve, reject) => {
            this._http.get('/assets/proxy.config.json')
                .map(res => res.json())
                .subscribe((config) => {
                    this.api = {
                        url: config.api.url,
                    }
                    resolve(true);
                });
        });
    }
}