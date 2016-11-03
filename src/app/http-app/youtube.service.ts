import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {SearchResult} from './search-result';
import {Observable} from 'rxjs/Rx';

export const YOUTUBE_API_KEY = 'AIzaSyBzkQGEbpcW90Um7YMMMPT8-MeeZ1aeQss';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

/**
 * YouTubeService connects to the YouTube API
 *
 * @link https://developers.google.com/youtube/v3/docs/search/list
 */
@Injectable()
export class YouTubeService {
    private http: Http;
    private apiKey: string;
    private apiUrl: string;

    constructor(
        http: Http,
        @Inject(YOUTUBE_API_KEY) apiKey: string,
        @Inject(YOUTUBE_API_URL) apiUrl: string
    ) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }

    public search(query: string): Observable<SearchResult[]> {
        const params = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`,
        ].join('&');
        const queryUrl = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl)
            .map((response: Response) => {
                return (<any>response.json()).items.map((item: any) => {
                    console.log('raw item', item); // uncomment if you want to debug
                    return new SearchResult({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnailUrl: item.snippet.thumbnails.high.url,
                    });
                });
            });
    }
}
