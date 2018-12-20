import { Component, OnInit } from '@angular/core';
import { BarcelonaComponent } from '../clubs/barcelona/barcelona.component';
import { AjaxComponent } from '../clubs/ajax/ajax.component';
import { LiverpoolComponent } from '../clubs/liverpool/liverpool.component';
import { BayernComponent } from '../clubs/bayern/bayern.component';
import { MilanComponent } from '../clubs/milan/milan.component';
import { RealComponent } from '../clubs/real/real.component';
import { RequestDataService } from '../request-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public milan = new MilanComponent;
  public ajax = new AjaxComponent;
  public bayern = new BayernComponent;
  public liverpool = new LiverpoolComponent;
  public real = new RealComponent;
  public barcelona = new BarcelonaComponent;
  public componentList = [this.milan, this.ajax, this.bayern, this.liverpool, this.real, this.barcelona];

  public isTeamSelected: boolean = false;

  public selectedTeam = {
      title: "",
      description: "",
      author: "",
      image: ""
  };

  public numberOfSymbols: number = 250;

  public visibleText: string = "";

  public isAllTextVisible: boolean = false;

  public fontSize: number = 18;

  public textBackground: string = "white";

  public textColor: string = "black";

  public isImageShown: boolean = true;

  public articleData;

  constructor(private _requestDataService: RequestDataService) {
    this._requestDataService.getData().subscribe(data => this.articleData = data);
  }

  ngOnInit() {
  }

  checkLength() {
    if (this.visibleText.length === this.selectedTeam.description.length) {
      this.isAllTextVisible = true;
    } else {
      this.isAllTextVisible = false;
    }
  }


  selectTeam(team) {
    this.isTeamSelected = true;
    this.isImageShown = true;
    this.fontSize = 18;
    document.getElementById('description').style.fontSize = this.fontSize + "px";
    this.selectedTeam = team;
    this.numberOfSymbols = 250;
    this.visibleText = this.selectedTeam.description.substring(0, this.numberOfSymbols);
    this.checkLength();
  }

  showMoreText() {
    this.numberOfSymbols += 250;
    this.visibleText = this.selectedTeam.description.substring(0, this.numberOfSymbols);
    this.checkLength();
  }

  increaseFont() {
    if (this.fontSize <= 30) {
      this.fontSize += 2;
      document.getElementById('description').style.fontSize = this.fontSize + "px";
    }
  }

  decreaseFont() {
    if (this.fontSize > 12) {
      this.fontSize -= 2;
      document.getElementById('description').style.fontSize = this.fontSize + "px";
    }
  }

  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }

}
