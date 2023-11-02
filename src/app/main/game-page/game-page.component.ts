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
  public players!: Player[] | null;
  public maxScore: number;
  public isFinished = false;
  public halvePointsActivated = false;

  public formGroup!: ReturnType<typeof this.createFormGroup>;

  constructor(private dataSaveService: DataSaveService) {
    this.players = this.dataSaveService.players;
    this.maxScore = this.dataSaveService.maxScore;
    this.halvePointsActivated = this.dataSaveService.halvePointsActivated;

    this.formGroup = this.createFormGroup();
  }

  public saveScores() {
    this.players?.forEach((player) => {
      player.score += this.getPlayerControl(player).value;

      if (this.halvePointsActivated && player.score % 100 === 0) {
        player.score /= 2;
      }

      this.getPlayerControl(player).setValue(null);
    });

    this.dataSaveService.players = this.players;
    this.determineLoser();
  }

  public determineLoser() {
    this.players?.forEach((player) => {
      if (player.score >= this.maxScore) {
        this.isFinished = true;
      }
    });
  }

  public getPlayerControl(player: Player) {
    return this.formGroup.controls[player.name];
  }

  public createFormGroup() {
    const group: any = {};

    this.players?.forEach((player) => {
      group[player.name] = new FormControl<number | null>(null);
    });
    return new FormGroup(group);
  }
}
