import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoreItemComponent } from './player-score-item.component';

describe('PlayerScoreItemComponent', () => {
  let component: PlayerScoreItemComponent;
  let fixture: ComponentFixture<PlayerScoreItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerScoreItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
