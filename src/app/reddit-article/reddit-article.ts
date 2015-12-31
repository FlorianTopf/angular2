import {
    Component,
    View
} from 'angular2/core';

import Article from './article';

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    }
})

@View({
    templateUrl: 'app/reddit-article/reddit-article.html'
})

export default class RedditArticle {
    public article: Article;

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
