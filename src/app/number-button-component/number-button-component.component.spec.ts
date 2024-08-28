import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberButtonComponentComponent } from './number-button-component.component';

describe('NumberButtonComponentComponent', () => {
  let component: NumberButtonComponentComponent;
  let fixture: ComponentFixture<NumberButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberButtonComponentComponent]
    });
    fixture = TestBed.createComponent(NumberButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
