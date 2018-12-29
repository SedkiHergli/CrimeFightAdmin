import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountusPage } from './accountus.page';

describe('AccountusPage', () => {
  let component: AccountusPage;
  let fixture: ComponentFixture<AccountusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
