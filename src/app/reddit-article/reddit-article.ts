import {Component, Input} from '@angular/core';

import {Article} from './article';

@Component({
    host: {'class': 'row'},
    selector: 'reddit-article',
    templateUrl: 'app/reddit-article/reddit-article.html',
})
export class RedditArticle {
    @Input() article: Article;

    constructor () {
        console.info('RedditArticle Component Mounted Successfully');
    }

    voteUp (): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown (): boolean {
        this.article.voteDown();
        return false;
    }
}
