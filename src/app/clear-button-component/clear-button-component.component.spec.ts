import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearButtonComponentComponent } from './clear-button-component.component';

describe('ClearButtonComponentComponent', () => {
  let component: ClearButtonComponentComponent;
  let fixture: ComponentFixture<ClearButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearButtonComponentComponent]
    });
    fixture = TestBed.createComponent(ClearButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
