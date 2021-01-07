import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittimetableComponent } from './edittimetable.component';

describe('EdittimetableComponent', () => {
  let component: EdittimetableComponent;
  let fixture: ComponentFixture<EdittimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
