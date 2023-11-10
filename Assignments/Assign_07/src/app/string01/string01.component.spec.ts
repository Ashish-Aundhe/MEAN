import { ComponentFixture, TestBed } from '@angular/core/testing';

import { String01Component } from './string01.component';

describe('String01Component', () => {
  let component: String01Component;
  let fixture: ComponentFixture<String01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [String01Component]
    });
    fixture = TestBed.createComponent(String01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
