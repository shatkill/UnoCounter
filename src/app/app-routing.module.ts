import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFrameComponent } from './main/main-frame/main-frame.component';
import { MainLandingComponent } from './main/main-landing/main-landing.component';
import { GamePageComponent } from './main/game-page/game-page.component';

const routes: Routes = [
  {path: "", component: MainFrameComponent, children: [{
    path: "",  component: MainLandingComponent
  }, {
    path: "game",  component: GamePageComponent
  },]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
