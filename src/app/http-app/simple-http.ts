import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    selector: 'simple-http',
    templateUrl: 'simple-http.html',
})
export class SimpleHttpComponent {
    public data: Object;
    public loading: boolean;
    private http: Http;

    constructor(http: Http) {
        this.http = http;
        console.info('SimpleHttp Component Mounted Successfully');
    }

    public makeRequest(): void {
        this.loading = true;
        this.http
            .request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
}
