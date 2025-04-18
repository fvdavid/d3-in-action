import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DendrogramComponent } from './dendrogram.component';

describe('DendrogramComponent', () => {
  let component: DendrogramComponent;
  let fixture: ComponentFixture<DendrogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DendrogramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DendrogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
