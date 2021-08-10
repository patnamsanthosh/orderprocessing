import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavacorOrderComponent } from './zavacor-order.component';

describe('ZavacorOrderComponent', () => {
  let component: ZavacorOrderComponent;
  let fixture: ComponentFixture<ZavacorOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavacorOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavacorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
