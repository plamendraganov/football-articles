import { Component, OnInit } from '@angular/core';
import { ArticleFactory } from '../article-factory';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  private article = new ArticleFactory('Ajax', `Founded on March 18, 1900 AFC Ajax is one of the largest and most storied clubs in European football. After their founding and acceptance into Dutch Football Ajax spent ten seasons in the country's second division before earning promotion for the 1911 season. The move to the first division did not last long though as just three seasons later the club was relegated for the first and only time in its illustrious history. The fate of the club quickly changed with the arrival of trainer Jack Reynolds who would spend 35 years at the helm of the team. Under the leadership of this legendary coach Ajax won their first National Championship in 1918. From that point on Ajax could always be found at or near the top of the Dutch table. It was also Reynolds and his revolutionary training methods that built the foundation for what has now become the world famous Ajax Youth Training Program.`, 'Luke van Arnold', '../../../assets/ajax.jpg');

  constructor() { }

  ngOnInit() {
  }

}
