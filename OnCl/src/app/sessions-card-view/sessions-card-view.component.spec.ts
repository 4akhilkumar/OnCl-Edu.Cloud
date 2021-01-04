import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsCardViewComponent } from './sessions-card-view.component';

describe('SessionsCardViewComponent', () => {
  let component: SessionsCardViewComponent;
  let fixture: ComponentFixture<SessionsCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
