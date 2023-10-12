import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { CharBaseComponent } from './char/base/char-base.component';
import { ImportExportComponent } from './import-export/import-export.component';

@NgModule({
  declarations: [
    AppComponent,
    CharBaseComponent,
    ImportExportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
