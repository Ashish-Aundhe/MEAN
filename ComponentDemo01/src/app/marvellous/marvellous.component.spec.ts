import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousComponent } from './marvellous.component';

describe('MarvellousComponent', () => {
  let component: MarvellousComponent;
  let fixture: ComponentFixture<MarvellousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarvellousComponent]
    });
    fixture = TestBed.createComponent(MarvellousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
