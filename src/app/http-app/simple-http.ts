import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    selector: 'simple-http',
    templateUrl: 'app/http-app/simple-http.html',
})
export class SimpleHttpComponent {
    http: Http;
    data: Object;
    loading: boolean;

    constructor(http: Http) {
        this.http = http;
        console.info('SimpleHttp Component Mounted Successfully');
    }

    makeRequest(): void {
        this.loading = true;
        this.http
            .request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
}
