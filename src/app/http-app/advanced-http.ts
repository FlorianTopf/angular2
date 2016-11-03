import {Component} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

@Component({
    selector: 'advanced-http',
    templateUrl: 'app/http-app/advanced-http.html',
})
export class AdvancedHttpComponent {
    public data: Object;
    public loading: boolean;
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public makePost(): void {
        this.loading = true;
        this.http.post(
            'http://jsonplaceholder.typicode.com/posts',
            JSON.stringify({
                body: 'bar',
                title: 'foo',
                userId: 1,
            }))
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }

    public makeDelete(): void {
        this.loading = true;
        this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }

    public makeHeaders(): void {
        let headers: Headers = new Headers();
        headers.append('X-API-TOKEN', 'ng-book');

        let opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
            .subscribe((res: Response) => {
                this.data = res.json();
            });
    }
}
