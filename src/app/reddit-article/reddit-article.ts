import {Component, Input} from '@angular/core';

import {Article} from './article';

@Component({
    host: {'class': 'row'},
    selector: 'reddit-article',
    templateUrl: 'reddit-article.html',
})
export class RedditArticle {
    @Input() public article: Article;

    constructor() {
        console.info('RedditArticle Component Mounted Successfully');
    }

    public voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    public voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}
