import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home/home.component';
import { PlayerFormComponent } from './modules/home/player-form/player-form.component';
import { GameFormComponent } from './modules/game/game-form/game-form.component';
import { PlayerService } from './core/players_service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerFormComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
