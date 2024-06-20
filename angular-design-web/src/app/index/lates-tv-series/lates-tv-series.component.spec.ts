import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesTvSeriesComponent } from './lates-tv-series.component';

describe('LatesTvSeriesComponent', () => {
  let component: LatesTvSeriesComponent;
  let fixture: ComponentFixture<LatesTvSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatesTvSeriesComponent]
    });
    fixture = TestBed.createComponent(LatesTvSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
