import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTableViewComponent } from './timetable-table-view.component';

describe('TimetableTableViewComponent', () => {
  let component: TimetableTableViewComponent;
  let fixture: ComponentFixture<TimetableTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableTableViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
