import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcelonaComponent } from './barcelona/barcelona.component';

@NgModule({
  declarations: [BarcelonaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BarcelonaComponent
  ]
})
export class ClubsModule { }
