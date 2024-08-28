import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualsButtonComponentComponent } from './equals-button-component.component';

describe('EqualsButtonComponentComponent', () => {
  let component: EqualsButtonComponentComponent;
  let fixture: ComponentFixture<EqualsButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EqualsButtonComponentComponent]
    });
    fixture = TestBed.createComponent(EqualsButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
