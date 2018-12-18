import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { ClubInfoComponent } from './club-info/club-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ClubInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
