import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleGeoComponent } from './google-geo.component';

describe('GoogleGeoComponent', () => {
  let component: GoogleGeoComponent;
  let fixture: ComponentFixture<GoogleGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleGeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
