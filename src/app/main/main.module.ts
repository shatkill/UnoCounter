import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from './game-page/game-page.component';
import { PlayerScoreItemComponent } from './player-score-item/player-score-item.component';
import { StatisticsDialogComponent } from './game-page/statistics-dialog/statistics-dialog.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainFrameComponent,
    MainLandingComponent,
    MainHeaderComponent,
    GamePageComponent,
    PlayerScoreItemComponent,
    StatisticsDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [MainFrameComponent, MainLandingComponent, MainHeaderComponent],
})
export class MainModule {}
