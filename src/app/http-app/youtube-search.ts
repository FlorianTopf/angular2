import {Component} from '@angular/core';
import {SearchResult} from './search-result';

@Component({
    selector: 'youtube-search',
    templateUrl: 'youtube-search.html',
})
export class YouTubeSearchComponent {
    public results: SearchResult[];
    public loadingGif: string;

    public updateResults(results: SearchResult[]): void {
        this.results = results;
        this.loadingGif = ((<any>window).__karma__) ? '' : require('images/loading.gif');
        // console.log("results:", this.results); // uncomment to take a look
    }
}
