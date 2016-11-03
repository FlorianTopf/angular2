import {Component} from '@angular/core';
import {SearchResult} from './search-result';

// FIXME not working (otherwise put it as property of the component)
//let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

@Component({
    selector: 'youtube-search',
    templateUrl: 'app/http-app/youtube-search.html',
})
export class YouTubeSearchComponent {
    public results: SearchResult[];

    public updateResults(results: SearchResult[]): void {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    }
}
