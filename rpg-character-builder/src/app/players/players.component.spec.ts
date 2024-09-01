import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //unit test 1 (default test)
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //unit test 2
  it('should correctly display a list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const characters = compiled.querySelectorAll('.player-options');

    expect(characters.length).toEqual(component.players.length);
  });
});
