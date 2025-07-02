import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePieComponent } from './google-pie.component';

describe('GooglePieComponent', () => {
  let component: GooglePieComponent;
  let fixture: ComponentFixture<GooglePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooglePieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooglePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
