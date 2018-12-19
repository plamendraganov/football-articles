import { Component, OnInit } from '@angular/core';
import { ArticleConstructor } from '../../clubs/article-constructor';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-barcelona',
  templateUrl: './barcelona.component.html',
  styleUrls: ['./barcelona.component.css']
})
export class BarcelonaComponent implements OnInit {
  private article: ArticleInterface = new ArticleConstructor('Barcelona', `FC Barcelona, founded in 1899 by a group of young foreigners living in Barcelona, was the result of the increasing popularity of football, and other British sports, across Europe. These origins have conferred upon the Club its intercultural identity, multi-sport focus and its deeply-rooted allegiance to Barcelona and Catalonia. The foundation of the Club coincided with a time when people were becoming interested in playing sport in Catalonia this social context and Catalonia’s idiosyncratic culture led to the creation of a new model of modern leisure. Gamper, the Club’s founder, was the inspiration and driving force behind the Club’s first 25 years. His commitment to FC Barcelona went far beyond his role as player, director and president.`, 'Carlos Velasquez', '../../../assets/barcelona.jpg')

  constructor() { }

  ngOnInit() {
  }

}
