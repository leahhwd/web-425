import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayersComponent } from './players/players.component';
import { Routes, Router } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {

    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [
      {path: 'players', component: PlayersComponent}
    ]
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        PlayersComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //Week 3 Unit test
  it('should have the correct route for the PlayersComponenet', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'players');

    expect(route).toBeDefined();
    if(route) {
      expect(route.component).toBe(PlayersComponent);
    }
  });
});
