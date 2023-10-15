import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que04Component } from './que04.component';

describe('Que04Component', () => {
  let component: Que04Component;
  let fixture: ComponentFixture<Que04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Que04Component]
    });
    fixture = TestBed.createComponent(Que04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
