import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LollipopComponent } from './lollipop.component';

describe('LollipopComponent', () => {
  let component: LollipopComponent;
  let fixture: ComponentFixture<LollipopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LollipopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LollipopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
