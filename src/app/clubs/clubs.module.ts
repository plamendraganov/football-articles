import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcelonaComponent } from './barcelona/barcelona.component';
import { AjaxComponent } from './ajax/ajax.component';

@NgModule({
  declarations: [BarcelonaComponent, AjaxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BarcelonaComponent,
    AjaxComponent
  ]
})
export class ClubsModule { }
