import { Component } from '@angular/core';
import { BarcelonaComponent } from './clubs/barcelona/barcelona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football-articles';
  public barcelona = new BarcelonaComponent;
}
