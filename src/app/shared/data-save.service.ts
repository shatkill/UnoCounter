import { Injectable } from '@angular/core';
import { Player } from './models/Player';

@Injectable({
  providedIn: 'root',
})
export class DataSaveService {
  public set players(players: Player[] | null) {
    localStorage.setItem('players', JSON.stringify(players));
  }

  public get players() {
    let localStoragePlayers = localStorage.getItem('players');

    if (localStoragePlayers !== null) {
      return JSON.parse(localStoragePlayers) as Player[];
    }
    return null;
  }

  public set maxScore(maxScore: number) {
    localStorage.setItem('maxScore', maxScore.toString());
  }

  public get maxScore() {
    let localStorageMaxScore = localStorage.getItem('maxScore');

    if (localStorageMaxScore !== null) {
      return +localStorageMaxScore as number;
    }
    return 0;
  }

  public set halvePointsActivated(halvePointsActivated: boolean) {
    localStorage.setItem(
      'halvePointsActivated',
      halvePointsActivated.toString()
    );
  }

  public get halvePointsActivated() {
    let halvePointsActivated = localStorage.getItem('halvePointsActivated');

    if (halvePointsActivated !== null) {
      return halvePointsActivated === 'true';
    }
    return false;
  }

  constructor() {}
}
