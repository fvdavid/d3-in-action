import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SankeyComponent } from './sankey.component';

describe('SankeyComponent', () => {
  let component: SankeyComponent;
  let fixture: ComponentFixture<SankeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SankeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SankeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
