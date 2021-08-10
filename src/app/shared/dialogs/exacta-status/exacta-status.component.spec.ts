import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactaStatusComponent } from './exacta-status.component';

describe('ExactaStatusComponent', () => {
  let component: ExactaStatusComponent;
  let fixture: ComponentFixture<ExactaStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExactaStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExactaStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
