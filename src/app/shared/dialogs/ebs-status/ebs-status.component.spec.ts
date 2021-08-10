import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbsStatusComponent } from './ebs-status.component';

describe('EbsStatusComponent', () => {
  let component: EbsStatusComponent;
  let fixture: ComponentFixture<EbsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
