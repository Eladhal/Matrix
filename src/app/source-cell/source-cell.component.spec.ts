import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCellComponent } from './source-cell.component';

describe('SourceCellComponent', () => {
  let component: SourceCellComponent;
  let fixture: ComponentFixture<SourceCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
