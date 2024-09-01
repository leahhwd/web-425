import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//Unit test 2
  it('should correctly display a list of tacos', () => {
    const compiled = fixture.nativeElement as HTMLElement; //get compiled html of component
    const menuItems = compiled.querySelectorAll('.menu-item'); //get all menu items

    expect(menuItems.length).toEqual(component.menu.length);
  });
});




