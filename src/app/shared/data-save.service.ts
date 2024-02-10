import { Injectable } from '@angular/core';
import { Score } from 'src/app/main';

@Injectable({
  providedIn: 'root',
})
export class DataSaveService {
  public set players(players: string[] | null) {
    localStorage.setItem('players', JSON.stringify(players));
  }

  public get players(): string[] | null {
    let localStoragePlayers = localStorage.getItem('players');

    if (localStoragePlayers !== null) {
      return JSON.parse(localStoragePlayers) as string[];
    }
    return [];
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

  public set scores(scores: { [player: string]: Score[] }) {
    if (scores == null) return;

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  public get scores(): { [player: string]: Score[] } {
    let scores = localStorage.getItem('scores');

    if (scores != null) {
      return JSON.parse(scores) as { [player: string]: Score[] };
    }
    return {};
  }

  constructor() {}
}
