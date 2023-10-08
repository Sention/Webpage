import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnenctionsComponent } from './connenctions.component';

describe('ConnenctionsComponent', () => {
  let component: ConnenctionsComponent;
  let fixture: ComponentFixture<ConnenctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnenctionsComponent]
    });
    fixture = TestBed.createComponent(ConnenctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
