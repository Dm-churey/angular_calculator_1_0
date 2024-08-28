import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideButtonComponentComponent } from './divide-button-component.component';

describe('DivideButtonComponentComponent', () => {
  let component: DivideButtonComponentComponent;
  let fixture: ComponentFixture<DivideButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivideButtonComponentComponent]
    });
    fixture = TestBed.createComponent(DivideButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
