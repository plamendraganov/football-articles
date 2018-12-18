import { Component, OnInit } from '@angular/core';
import { ArticleConstructor } from '../article-constructor';
import { IArticle } from '../article-interface';

@Component({
  selector: 'app-liverpool',
  templateUrl: './liverpool.component.html',
  styleUrls: ['./liverpool.component.css']
})
export class LiverpoolComponent implements OnInit {

  private article: IArticle = new ArticleConstructor('Liverpool', `Following the moving of Everton to Goodison Park in 1892, the club's then-president John Houlding suddenly found himself with the rights to Anfield stadium and no team to play on it. Always a practical man, Houlding quickly decided to circumvent this problem by forming his own club – Liverpool. After becoming a member of the Football League in 1893, the team managed to get promoted to first division after one season in the second division. Early on, Liverpool established themselves as one of England's top clubs, winning League titles in 1901, 1906, 1922 and 1923.`, 'John Doe', '../../../assets/liverpool.jpg');

  constructor() { }

  ngOnInit() {
  }

}
