import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {HttpApp} from './http-app';
import {SimpleHttpComponent} from './simple-http';
import {YouTubeSearchComponent} from './youtube-search';
import {SearchBoxComponent} from './search-box';
import {SearchResultComponent} from './search-result';
import {YouTubeService, YOUTUBE_API_KEY, YOUTUBE_API_URL} from './youtube.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [
        HttpApp,
        SimpleHttpComponent,
        YouTubeSearchComponent,
        SearchBoxComponent,
        SearchResultComponent,
    ],
    exports: [HttpApp],
    providers: [
        {provide: YouTubeService, useClass: YouTubeService},
        {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
        {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL},
    ],
})
export class HttpAppModule {
    constructor () {
        console.info('HttpApp Module Mounted Successfully');
    }
}
