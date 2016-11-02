import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RedditArticle} from '../reddit-article/reddit-article';
import {RedditApp} from './reddit-app';

@NgModule({
    imports: [CommonModule],
    declarations: [
        RedditApp,
        RedditArticle,
    ],
    exports: [RedditApp],
})
export class RedditAppModule {
    constructor () {
        console.info('RedditApp Module Mounted Successfully');
    }
}
