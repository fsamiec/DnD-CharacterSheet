import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { CharBaseComponent } from './char/base/char-base.component';
import { CharStatsComponent } from './char/stats/char-stats.component';
import { CharSkillsComponent } from './char/skills/char-skills.component';

import { ImportExportComponent } from './import-export/import-export.component';
import { DummyData } from './models/DummyData';

@NgModule({
  declarations: [
    AppComponent,
    CharBaseComponent,    
    CharStatsComponent,
    CharSkillsComponent,
    ImportExportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DummyData],
  bootstrap: [AppComponent]
})
export class AppModule { }
