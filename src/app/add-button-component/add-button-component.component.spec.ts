import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonComponentComponent } from './add-button-component.component';

describe('AddButtonComponentComponent', () => {
  let component: AddButtonComponentComponent;
  let fixture: ComponentFixture<AddButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddButtonComponentComponent]
    });
    fixture = TestBed.createComponent(AddButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
