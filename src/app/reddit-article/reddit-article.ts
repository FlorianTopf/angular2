import {
    Component
} from 'angular2/core';

import Article from './article';

@Component({
    inputs: ['article'],
    host: {
        'class': 'row'
    },
    selector: 'reddit-article',
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
