import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSaveService } from 'src/app/shared/data-save.service';
import { Player } from 'src/app/shared/models/Player';

@Component({
  selector: 'uc-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.scss'],
})
export class MainLandingComponent implements OnInit {
  public selectedPlayers: Player[] = [];

  public addPlayerControl = new FormControl<string>('');
  public scoreControl = new FormControl<number>(400);
  public halveControl = new FormControl<boolean>(false);

  constructor(
    private dataSaveService: DataSaveService,
    private appRouter: Router
  ) {}

  ngOnInit(): void {}

  public addPlayer() {
    this.selectedPlayers.push({
      name: this.addPlayerControl.value ?? '',
      score: 0,
    });
    this.addPlayerControl.reset();
  }

  public startGame() {
    this.dataSaveService.players = this.selectedPlayers;
    this.dataSaveService.maxScore = this.scoreControl.value ?? 400;
    this.dataSaveService.halvePointsActivated = this.halveControl.value ?? false;

    this.appRouter.navigate(['/game']);
  }
}
