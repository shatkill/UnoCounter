import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Score } from 'src/app/main';

export interface DialogData {
  players: string[];
  scores: { [player: string]: Score[] };
  rounds: number;
}

export enum StatisticId {
  AVG_SCORE,
  WINS,
  WORST_SCORE,
  WINSTREAK,
}

export interface StatisticType {
  id: StatisticId;
  name: string;
}

export interface StatisticCalculator {
  id: StatisticType;
  calcFunction: Function;
}

@Component({
  selector: 'uc-statistics-dialog',
  templateUrl: './statistics-dialog.component.html',
  styleUrls: ['./statistics-dialog.component.scss'],
})
export class StatisticsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StatisticsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  protected getPlayerRepresentation(player: string) {
    return player.slice(0, 1) + player.slice(-1);
  }

  public get statisticTypes() {
    return [
      {
        id: { id: StatisticId.WINS, name: 'Wins' },
        calcFunction: (player: string) => {
          let count = 0;
          this.data.scores[player].forEach((score) => {
            if (score.won) {
              count++;
            }
          });

          return count;
        },
      },
      {
        id: { id: StatisticId.AVG_SCORE, name: 'AVG. Score' },
        calcFunction: (player: string) => {
          return (
            this.data.scores[player][this.data.rounds - 1].sumScore /
            (this.data.rounds - 1)
          ).toFixed(2);
        },
      },
      {
        id: { id: StatisticId.WORST_SCORE, name: 'Worst score' },
        calcFunction: (player: string) => {
          let worstScore = -Infinity;
          this.data.scores[player].forEach((score) => {
            if (score.scoreCurrentRound > worstScore) {
              worstScore = score.scoreCurrentRound;
            }
          });
          return worstScore;
        },
      },
      {
        id: { id: StatisticId.WINSTREAK, name: 'Win streak' },
        calcFunction: (player: string) => {
          let winStreak = 0;

          let currentStreak = 0;

          for (let i = 1; i < this.data.scores[player].length; i++) {
            if (this.data.scores[player][i].won) {
              currentStreak++;

              if (currentStreak > winStreak) {
                winStreak = currentStreak;
              }
            } else {
              currentStreak = 0;
            }
          }
          return winStreak;
        },
      },
    ];
  }
}
