import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import { CommonModule } from '@angular/common';
import { Guild } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;

    const testGuild = {
      guildName: 'Rezanoff',
      description: 'Testing the league',
      type: 'casual',
      acceptTerms: true,
      notificationPref: 'email'
    };

    component.guilds = [testGuild];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display details for new guilds', () => {
   const testGuild: Guild = {
    guildName: 'Rezanoff',
    description: 'Testing the league',
    type: 'casual',
    acceptTerms: true,
    notificationPref: 'email'
   }

  component.guilds = [testGuild];
  fixture.detectChanges();

  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('li').textContent).toContain('Guild Name: Rezanoff');
  expect(compiled.querySelector('li').textContent).toContain('Description: Testing the league');
  expect(compiled.querySelector('li').textContent).toContain('Type: casual');
  });

  it('should display a message when there are no created guilds', () => {
    component.guilds = [];

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No created guilds');
  })
});
