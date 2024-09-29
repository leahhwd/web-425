import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Character } from '../create-character/create-character.component';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

    const testCharacter = {
      id: 1007,
      name: 'Melinda',
      gender: 'other',
      class: 'Mage'
    };

    component.characters = [testCharacter];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message when no characters have been created', () => {
    component.characters = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('No characters created');
  })
});
