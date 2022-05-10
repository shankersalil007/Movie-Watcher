import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovComponent } from './mov.component';
import { MovListComponent } from './mov-list.component';
import { FavoriteDirective } from './favorite.directive';
import { categories, catogoryToken } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MovComponent,
    MovListComponent,
    FavoriteDirective,
  ],
  imports: [BrowserModule, NgbModule, HttpClientModule, routing],
  providers: [
    { provide: catogoryToken, useValue: categories },
    { provide: HttpXhrBackend, useClass: MockXHRBackend },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
