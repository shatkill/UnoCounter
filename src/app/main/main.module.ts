import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingComponent } from 'src/app/main';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from 'src/app/main';
import { StatisticsDialogComponent } from 'src/app/main';

import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainLandingComponent,
    MainHeaderComponent,
    GamePageComponent,
    StatisticsDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [MainLandingComponent, MainHeaderComponent],
})
export class MainModule {}
