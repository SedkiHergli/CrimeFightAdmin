import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersPage } from './weathers.page';

describe('WeatherPage', () => {
  let component: WeathersPage;
  let fixture: ComponentFixture<WeathersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
