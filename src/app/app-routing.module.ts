import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLandingComponent } from 'src/app/main';
import { GamePageComponent } from 'src/app/main';

const routes: Routes = [
  {
    path: '',
    component: MainLandingComponent,
  },
  {
    path: 'game',
    component: GamePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
