import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMoviesComponent } from './feature-movies.component';

describe('FeatureMoviesComponent', () => {
  let component: FeatureMoviesComponent;
  let fixture: ComponentFixture<FeatureMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureMoviesComponent]
    });
    fixture = TestBed.createComponent(FeatureMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
