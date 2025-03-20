import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelogramComponent } from './correlogram.component';

describe('CorrelogramComponent', () => {
  let component: CorrelogramComponent;
  let fixture: ComponentFixture<CorrelogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrelogramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrelogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
