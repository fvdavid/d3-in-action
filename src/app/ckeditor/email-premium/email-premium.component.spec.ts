import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPremiumComponent } from './email-premium.component';

describe('EmailPremiumComponent', () => {
  let component: EmailPremiumComponent;
  let fixture: ComponentFixture<EmailPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailPremiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
