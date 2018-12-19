import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BayernComponent } from './bayern/bayern.component';
import { RealComponent } from './real/real.component';
import { LiverpoolComponent } from './liverpool/liverpool.component';
import { MilanComponent } from './milan/milan.component';
import { ClubsModule } from '../clubs/clubs.module';

@NgModule({
  declarations: [SidebarComponent, AjaxComponent, BayernComponent, RealComponent, LiverpoolComponent, MilanComponent],
  imports: [
    FormsModule,
    CommonModule,
    ClubsModule
  ],
  exports: [
    SidebarComponent, 
    AjaxComponent, 
    BayernComponent, 
    RealComponent, 
    LiverpoolComponent, 
    MilanComponent
  ]
})
export class SidebarModule { }
