import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCellComponent } from './header-cell.component';

describe('HeaderCellComponent', () => {
  let component: HeaderCellComponent;
  let fixture: ComponentFixture<HeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
