import { Component, OnInit } from '@angular/core';
import { ArticleConstructor } from '../article-constructor';
import { IArticle } from '../article-interface';

@Component({
  selector: 'app-milan',
  templateUrl: './milan.component.html',
  styleUrls: ['./milan.component.css']
})
export class MilanComponent implements OnInit {
  private article: IArticle = new ArticleConstructor('Milan', `The first headquarters were established at the 'Fiaschetteria Toscana' in Via Berchet in Milan, back in 1899. From that moment on, the glorious history of Milan started as the club wrote its name in football's record books becoming one of the most famous and successful teams in the world, especially over the last 15 years. Rossoneri’s history is studded with the legendary names of those men who have made a major contribution to the club's development: presidents, coaches or players. The first president was a British expatriate, Alfred Edwards, who oversaw the club's first winning of the national championship - only two years after its foundation. The president with the highest number of trophies won is Silvio Berlusconi who has taken Milan to the pinnacle of the world since taking control in 1986. Extremely prestigious wins, obtained in every part of the world prove the unparalleled strength and organization of a great group.`, 'Marco Rossi', '/assets/milan.jpg');

  constructor() { }

  ngOnInit() {
  }

}
