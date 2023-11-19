import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { DataSaveService } from 'src/app/shared/data-save.service';
import { Player } from 'src/app/shared/models/Player';

@Component({
  selector: 'uc-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
  public players!: string[] | null;

  public shufflePlayer: string | undefined;
  public maxScore: number;
  public isFinished = false;
  public halvePointsActivated = false;

  public scores: { [player: string]: number[] } = {};
  public rounds;

  public formGroup!: ReturnType<typeof this.createFormGroup>;

  constructor(private dataSaveService: DataSaveService) {
    this.players = this.dataSaveService.players;
    this.maxScore = this.dataSaveService.maxScore;
    this.halvePointsActivated = this.dataSaveService.halvePointsActivated;

    this.formGroup = this.createFormGroup();

    this.rounds = 1;
    this.changeShufflePlayerTurn();

    this.players?.forEach((player) => {
      if (!this.scores[player]) {
        this.scores[player] = [0];
      }
    });
  }

  public addScores() {
    this.players?.forEach((player) => {
      this.scores[player].push(
        this.getCurrentScoreOfPlayer(player) +
          this.getPlayerControl(player).value
      );

      if (
        this.halvePointsActivated &&
        this.getCurrentScoreOfPlayer(player) % 100 === 0
      ) {
        this.scores[player][this.scores[player].length - 1] /= 2;
      }

      this.getPlayerControl(player).setValue(null);
    });

    this.rounds++;
    this.determineLoser();
    this.changeShufflePlayerTurn();
  }

  public determineLoser() {
    this.players?.forEach((player) => {
      if (this.getCurrentScoreOfPlayer(player) >= this.maxScore) {
        this.isFinished = true;
      }
    });
  }

  public getCurrentScoreOfPlayer(player: string) {
    return this.scores[player][this.scores[player].length - 1];
  }

  public getPlayerControl(player: string) {
    return this.formGroup.controls[player];
  }

  public changeShufflePlayerTurn() {
    this.shufflePlayer = this.players
      ? this.players[(this.rounds - 1) % this.players.length]
      : '';
  }

  public createFormGroup() {
    const group: any = {};

    this.players?.forEach((player) => {
      group[player] = new FormControl<number | null>(null);
    });
    return new FormGroup(group);
  }
}
