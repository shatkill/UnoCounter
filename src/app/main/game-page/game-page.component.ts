import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataSaveService } from 'src/app/shared/data-save.service';
import { StatisticsDialogComponent } from './statistics-dialog/statistics-dialog.component';

export interface Score {
  scoreCurrentRound: number;
  sumScore: number;
  won: boolean;
}

@Component({
  selector: 'uc-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
  protected players!: string[] | null;

  protected shufflePlayer: string | undefined;
  protected maxScore!: number;
  protected isFinished = false;
  protected halvePointsActivated = false;

  protected scores: { [player: string]: Score[] } = {};

  protected formGroup!: ReturnType<typeof this.createFormGroup>;

  protected maxScoreControl;
  protected maxScoreEditingActive = false;

  constructor(
    private dataSaveService: DataSaveService,
    private dialog: MatDialog
  ) {
    this.players = this.dataSaveService.players;
    this.updateMaxScore();

    this.maxScoreControl = new FormControl<number>(
      this.dataSaveService.maxScore
    );

    this.halvePointsActivated = this.dataSaveService.halvePointsActivated;
    this.scores = this.dataSaveService.scores;

    this.formGroup = this.createFormGroup();

    this.changeShufflePlayerTurn();
    this.determineLoser();
  }

  protected addScores() {
    if (!this.thereIsOneWinner()) {
      return;
    }

    this.players?.forEach((player) => {
      this.scores[player].push({
        scoreCurrentRound: this.getPlayerControl(player).value,
        sumScore:
          this.getPlayerControl(player).value +
          this.getCurrentScoreOfPlayer(player),
        won: this.getPlayerControl(player).value === null,
      });

      if (
        this.halvePointsActivated &&
        this.getCurrentScoreOfPlayer(player) % 100 === 0
      ) {
        this.scores[player][this.scores[player].length - 1].sumScore /= 2;
      }

      this.getPlayerControl(player).setValue(null);
    });

    this.dataSaveService.scores = this.scores;
    this.determineLoser();
    this.changeShufflePlayerTurn();
  }

  public determineLoser() {
    this.players?.forEach((player) => {
      if (this.getCurrentScoreOfPlayer(player) >= this.maxScore) {
        this.isFinished = true;
        return;
      }
    });
    this.isFinished = false;
  }

  public getCurrentScoreOfPlayer(player: string) {
    return this.scores[player][this.scores[player].length - 1].sumScore;
  }

  public getPlayerControl(player: string) {
    return this.formGroup.controls[player];
  }

  protected changeShufflePlayerTurn() {
    this.shufflePlayer = this.players
      ? this.players[(this.currentRound - 1) % this.players.length]
      : '';
  }

  private createFormGroup() {
    const group: any = {};

    this.players?.forEach((player) => {
      group[player] = new FormControl<number | null>(null);
    });
    return new FormGroup(group);
  }

  private thereIsOneWinner() {
    let winners = 0;
    this.players?.forEach((player) => {
      if (this.getPlayerControl(player).value === null) winners++;
    });

    return winners === 1;
  }

  protected toggleScoreEditing() {
    this.maxScoreEditingActive = !this.maxScoreEditingActive;
  }

  protected updateMaxScore() {
    this.maxScore = this.dataSaveService.maxScore;
  }

  protected editMaxScore() {
    if (this.maxScoreControl.value)
      this.dataSaveService.maxScore = this.maxScoreControl.value;

    this.updateMaxScore();
    this.toggleScoreEditing();
    this.determineLoser();
  }

  protected openStatistics(): void {
    this.dialog.open(StatisticsDialogComponent, {
      data: {
        players: this.players,
        scores: this.scores,
        rounds: this.currentRound,
      },
      maxWidth: '500px',
    });
  }

  public get currentRound() {
    if (this.scores === null || this.players === null) return 0;
    return this.scores[this.players[0]].length;
  }

  protected undoLastScores() {
    if (this.currentRound < 2) return;

    this.players?.forEach((player) => {
      this.getPlayerControl(player).setValue(
        this.scores[player].pop()?.scoreCurrentRound
      );
    });
  }

  protected getPlayerRepresentation(player: string) {
    return player.slice(0, 1) + player.slice(-1);
  }
}
