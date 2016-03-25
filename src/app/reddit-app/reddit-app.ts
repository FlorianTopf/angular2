import {
    Component
} from 'angular2/core';

import {
    NgFor
} from 'angular2/common';

import RedditArticle from '../reddit-article/reddit-article';
import Article from '../reddit-article/article';

@Component({
    directives: [RedditArticle, NgFor],
    selector: 'reddit-app',
    templateUrl: 'app/reddit-app/reddit-app.html'
})

export default class RedditApp {
    articles: Article[];

    constructor () {
        console.info('RedditApp Component Mounted Successfully');
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 10),
            new Article('Fullstack', 'http://fullstack.io', 9),
            new Article('Angular Homepage', 'http://angular.io', 8)
        ];
    }

    public addArticle (title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }

    public sortedArticles (): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}
