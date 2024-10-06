import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle errors when data is not found', () => {
    const expectedMessage = 'No character factions found.'
    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush('Factions not found', {status: 404, statusText: 'Not Found'});

    expect(component.noFactionMessage).toEqual(expectedMessage);
  })

  it('should correctly fetch a list of character factions', () => {
    const mockFactions = [
      {name: 'The Band of Rogues', description: 'The Band of Rogues is a faction full of independent rogues.'},
      {name: 'The Amazing Mages', description: 'A faction full of amazing mages.'}
    ];

    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush(mockFactions);

    expect(component.factions).toEqual(mockFactions);
  })

  it('should update the characterFactions div when character factions are found.', () => {

    const mockFaction = {
      name: 'The Band of Rogues',
      description: 'The Band of Rogues is a faction full of independent rogues.'
    }

    const req = httpTestingController.expectOne(`http://localhost:3000/api/character-factions`);
    req.flush(mockFaction);

    expect(component.factions).toEqual(mockFaction);
  })
});
