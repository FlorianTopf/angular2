import {Component} from '@angular/core';
import {SearchResult} from './search-result';

// FIXME not working
//let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

@Component({
    selector: 'youtube-search',
    templateUrl: 'app/http-app/youtube-search.html',
})
export class YouTubeSearchComponent {
    results: SearchResult[];

    updateResults(results: SearchResult[]): void {
        this.results = results;
        // console.log("results:", this.results); // uncomment to take a look
    }
}
