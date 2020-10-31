import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlantCellComponent } from './slant-cell.component';

describe('SlantCellComponent', () => {
  let component: SlantCellComponent;
  let fixture: ComponentFixture<SlantCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlantCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlantCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
