export class ArticleConstructor {
    constructor(public title: string, public description: string, public author: string, public image: string) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.image = image;
    }
}

