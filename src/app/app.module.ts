import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { ClubInfoComponent } from './club-info/club-info.component';
import { ClubsModule } from './clubs/clubs.module';
import { RequestDataService } from './request-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ClubInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarModule,
    ClubsModule,
    HttpClientModule
  ],
  providers: [RequestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
