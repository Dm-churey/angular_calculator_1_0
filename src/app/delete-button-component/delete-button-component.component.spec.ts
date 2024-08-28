import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteButtonComponentComponent } from './delete-button-component.component';

describe('DeleteButtonComponentComponent', () => {
  let component: DeleteButtonComponentComponent;
  let fixture: ComponentFixture<DeleteButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteButtonComponentComponent]
    });
    fixture = TestBed.createComponent(DeleteButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
