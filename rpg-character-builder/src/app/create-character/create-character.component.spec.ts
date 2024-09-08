import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {

    component.name = "Harry Viking";
    component.gender = "other";
    component.class = "warrior";

    const test1 = {
      value: {
       name: component.name,
       gender: component.gender,
       class: component.class
      },
      valid: true
    }
    component.onSubmit(test1);
    const addedCharacter = component.characters[0];

    expect(addedCharacter.id).toBeGreaterThan(0);
    expect(addedCharacter.id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(addedCharacter.id)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    component.name = "Sana Bunderwunt";
    component.gender = "male";
    component.class = "rogue";

    const test2 = {
      value: {
       name: "Sana Bunderwunt",
       gender: "male",
       class: "rogue",
      },
      valid: true
    }
    component.onSubmit(test2);
    const addedCharacter = component.characters[0];

    expect(addedCharacter.name).toBe("Sana Bunderwunt");
    expect(addedCharacter.gender).toBe("male");
    expect(addedCharacter.class).toBe("rogue");
  });

  it('should reset all form fields to default value after resetForm is called', () => {

    component.name = "Kelley Widle";
    component.gender = "female";
    component.class = "warrior";

    component.resetForm();

    expect(component.name).toBe(" ");
    expect(component.class).toBe(" ");
    expect(component.gender).toBe(" ");
  })
});
