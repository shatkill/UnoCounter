import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSaveService } from 'src/app/shared';
import { Score } from 'src/app/main';

@Component({
  selector: 'uc-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.scss'],
})
export class MainLandingComponent implements OnInit {
  public selectedPlayers: string[] = [];

  public addPlayerControl = new FormControl<string>('');
  public scoreControl = new FormControl<number>(400);
  public halveControl = new FormControl<boolean>(true);

  @ViewChild('addPlayerInput') addPlayerInput: ElementRef | undefined;

  constructor(
    private dataSaveService: DataSaveService,
    private appRouter: Router
  ) {}

  ngOnInit(): void {}

  public addPlayer() {
    if (
      this.addPlayerControl.value === '' ||
      this.addPlayerControl.value === null
    ) {
      return;
    }

    this.selectedPlayers.push(this.addPlayerControl.value);
    this.addPlayerControl.reset();

    this.addPlayerInput?.nativeElement.focus();
  }

  public startGame() {
    if (this.selectedPlayers.length === 0) {
      return;
    }

    this.dataSaveService.players = this.selectedPlayers;
    this.dataSaveService.maxScore = this.scoreControl.value ?? 400;
    this.dataSaveService.halvePointsActivated =
      this.halveControl.value ?? false;

    this.dataSaveService.scores = this.createScores();

    this.appRouter.navigate(['/game']);
  }

  public createScores() {
    let scores: { [player: string]: Score[] } = {};

    this.selectedPlayers?.forEach((player) => {
      if (!scores[player]) {
        scores[player] = [{ scoreCurrentRound: 0, sumScore: 0, won: false }];
      }
    });

    return scores;
  }

  public resumeGame() {
    this.appRouter.navigate(['/game']);
  }

  public get recentGameExists() {
    if (
      this.dataSaveService.players &&
      this.dataSaveService.players.length > 0
    ) {
      return true;
    } else return false;
  }
}
