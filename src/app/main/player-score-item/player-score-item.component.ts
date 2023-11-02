import { Component, Input, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { Player } from 'src/app/shared/models/Player';

@Component({
  selector: 'uc-player-score-item',
  templateUrl: './player-score-item.component.html',
  styleUrls: ['./player-score-item.component.scss'],
})
export class PlayerScoreItemComponent implements OnInit {
  @Input()
  public player: Player | undefined;

  @Input()
  public scoreControl!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
