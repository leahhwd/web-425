import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset form after creating guild', () => {
    component.guildName = 'Drawoart';
    component.description = 'A small team of dragon hunters';
    component.type = 'educational';
    component.acceptTerms = true;
    component.notifPref = 'sms';

    component.createGuild();

    expect(component.guildName).toBe('');
    expect(component.description).toBe('');
    expect(component.type).toBe('');
    expect(component.acceptTerms).toBe(false);
    expect(component.notifPref).toBe('');
  });

  it('should call createGuild on form submit with valid data', () => {
    spyOn(component, 'createGuild');

    component.guildName = 'Lebaraon';
    component.description = 'A league of their own';
    component.type = 'casual';
    component.acceptTerms = true;
    component.notifPref = 'email';

    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.createGuild).toHaveBeenCalled();
  });

  it('should add new guild when form is submitted', () => {
    component.guildName = 'ztonyark';
    component.description = 'Lonely Children';
    component.type = 'educational';
    component.acceptTerms = true;
    component.notifPref = 'in-app';

    component.createGuild();

    expect(component.guilds.length).toBe(1);

  });

});
