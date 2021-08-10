import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniStatusDetailsComponent } from './omni-status-details.component';

describe('OmniStatusDetailsComponent', () => {
  let component: OmniStatusDetailsComponent;
  let fixture: ComponentFixture<OmniStatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniStatusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
