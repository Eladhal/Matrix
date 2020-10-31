import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SourceCellComponent } from './source-cell/source-cell.component';
import { TableComponent } from './table/table.component';
import { SlantCellComponent } from './slant-cell/slant-cell.component';
import { InfoCellComponent } from './info-cell/info-cell.component';
import { TitleComponent } from './title/title.component';
import { MainComponent } from './main/main.component';
import { BasicCellComponent } from './basic-cell/basic-cell.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderCellComponent } from './header-cell/header-cell.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { RowColHeaderComponent } from './row-col-header/row-col-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SourceCellComponent,
    TableComponent,
    SlantCellComponent,
    InfoCellComponent,
    TitleComponent,
    MainComponent,
    BasicCellComponent,
    HeaderCellComponent,
    RowColHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
