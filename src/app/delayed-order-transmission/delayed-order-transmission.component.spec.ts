import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedOrderTransmissionComponent } from './delayed-order-transmission.component';

describe('DelayedOrderTransmissionComponent', () => {
  let component: DelayedOrderTransmissionComponent;
  let fixture: ComponentFixture<DelayedOrderTransmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelayedOrderTransmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedOrderTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
