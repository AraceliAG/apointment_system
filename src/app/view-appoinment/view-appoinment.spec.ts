import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppoinment } from './view-appoinment';

describe('ViewAppoinment', () => {
  let component: ViewAppoinment;
  let fixture: ComponentFixture<ViewAppoinment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAppoinment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppoinment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
