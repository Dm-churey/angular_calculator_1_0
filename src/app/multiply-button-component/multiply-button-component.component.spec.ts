import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyButtonComponentComponent } from './multiply-button-component.component';

describe('MultiplyButtonComponentComponent', () => {
  let component: MultiplyButtonComponentComponent;
  let fixture: ComponentFixture<MultiplyButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplyButtonComponentComponent]
    });
    fixture = TestBed.createComponent(MultiplyButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
