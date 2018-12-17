import { Component, OnInit } from '@angular/core';
import { AjaxComponent } from './ajax/ajax.component';
import { MilanComponent } from './milan/milan.component';
import { BayernComponent } from './bayern/bayern.component';
import { LiverpoolComponent } from './liverpool/liverpool.component';
import { RealComponent } from './real/real.component';

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
  public componentList = [this.milan, this.ajax, this.bayern, this.liverpool, this.real];
  public marked = 250;

  public selectedTeam = {
    title: "",
    description: "",
    author: "",
    image: ""
  };

  constructor() { }

  ngOnInit() {
  }

  selectTeam(team) {
    this.selectedTeam = team;
  }

}
