import { Component, OnInit } from '@angular/core';
import { ArticleFactory } from '../article-factory';

@Component({
  selector: 'app-bayern',
  templateUrl: './bayern.component.html',
  styleUrls: ['./bayern.component.css']
})
export class BayernComponent implements OnInit {
  private article = new ArticleFactory('Bayern Munich', `Strangely enough for such a successful club, Bayern did not set the world alight straight away. After being founded in 1900, the club had to wait until 1932 for its first national championship. One title could not turn their fortunes around, however; in those years, Bayern were derided as "the Jew's club", and many important Jewish club officials had to leave the country due to the rise of Nazism in Germany. The post-war era brought its own troubles, with the club being relegated in 1955 and narrowly avoiding bankruptcy at the end of the decade. The only bright spot for Bayern was winning their first DFB-Pokal in 1957.`, 'Otto Hermann', '../../../assets/bayern.jpg');

  constructor() { }

  ngOnInit() {
  }

}
