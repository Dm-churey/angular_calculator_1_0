import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractButtonComponentComponent } from './subtract-button-component.component';

describe('SubtractButtonComponentComponent', () => {
  let component: SubtractButtonComponentComponent;
  let fixture: ComponentFixture<SubtractButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtractButtonComponentComponent]
    });
    fixture = TestBed.createComponent(SubtractButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
