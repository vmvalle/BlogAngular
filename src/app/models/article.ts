import {Comment} from "./comment";

export class Article {

  constructor(
    public id: string,
    public title: string,
    public author: string,
    public publishDate: Date,
    public text: string,
    public comments: [Comment]
  ){

  }

}
