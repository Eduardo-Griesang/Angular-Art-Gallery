import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardsComponent } from './components/small-cards/small-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TitleComponent,
    HomeComponent,
    BigCardComponent,
    SmallCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
