import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import { ClubsModule } from '../clubs/clubs.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    FormsModule,
    CommonModule,
    ClubsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
