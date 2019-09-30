import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBottomSheetComponent } from './assign-bottom-sheet.component';

describe('AssignBottomSheetComponent', () => {
  let component: AssignBottomSheetComponent;
  let fixture: ComponentFixture<AssignBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
