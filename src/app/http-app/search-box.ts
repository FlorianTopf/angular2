import {Component, OnInit, EventEmitter, ElementRef, Output, Inject} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {SearchResult} from './search-result';
import {YouTubeService} from './youtube.service';

@Component({
    selector: 'search-box',
    template: `<input type="text" class="field" placeholder="Search" autofocus>`,
})
export class SearchBoxComponent implements OnInit {
    @Output() public loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    private youtube: YouTubeService;
    private el: ElementRef;

    constructor(
        @Inject(YouTubeService) youtube: YouTubeService,
        el: ElementRef
    ) {
        this.youtube = youtube;
        this.el = el;
    }

    public ngOnInit(): void {
        // convert the `keyup` event into an observable stream
        Observable.fromEvent(this.el.nativeElement, 'keyup')
            .map((e: any) => e.target.value) // extract the value of the input
            .filter((text: string) => text.length > 1) // filter out if empty
            .debounceTime(250)                         // only once every 250ms
            .do(() => this.loading.next(true))         // enable loading
            // search, discarding old events if new input comes in
            .map((query: string) => this.youtube.search(query))
            .switch()
            // act on the return of the search
            .subscribe(
                (results: SearchResult[]) => { // on sucesss
                    this.loading.next(false);
                    this.results.next(results);
                },
                (err: any) => { // on error
                    console.log(err);
                    this.loading.next(false);
                },
                () => { // on completion
                    this.loading.next(false);
                }
            );
    }
}
