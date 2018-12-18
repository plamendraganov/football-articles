import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { AjaxComponent } from './ajax/ajax.component';
import { BayernComponent } from './bayern/bayern.component';
import { RealComponent } from './real/real.component';
import { LiverpoolComponent } from './liverpool/liverpool.component';
import { MilanComponent } from './milan/milan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent, AjaxComponent, BayernComponent, RealComponent, LiverpoolComponent, MilanComponent],
  imports: [
    FormsModule,
    CommonModule
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
