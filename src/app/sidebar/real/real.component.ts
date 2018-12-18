import { Component, OnInit } from '@angular/core';
import { ArticleConstructor } from '../article-constructor';
import { IArticle } from '../article-interface';

@Component({
  selector: 'app-real',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.css']
})
export class RealComponent implements OnInit {
  private article: IArticle = new ArticleConstructor('Real Madrid', `Real Madrid have once again defined an era in world football, winning four European Cups. In 2014, they lifted La Décima, before winning the Club World Cup that same year. Zidane's first two seasons in the dugout were historic, clinching La Undécima and La Duodécima. What's more, 2017 became a record-breaking year when the team got their hands on five trophies: The European Cup, the Club World Cup, LaLiga and the European and Spanish Super Cups. La Decimotercera then came in 2018, when they came out on top against Liverpool in Kiev.`, 'Alfonso Peres', '../../../assets/real.jpg');

  constructor() { }

  ngOnInit() {
  }

}
