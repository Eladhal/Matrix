import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowColHeaderComponent } from './rol-col-header.component';

describe('RolColHeaderComponent', () => {
  let component: RowColHeaderComponent;
  let fixture: ComponentFixture<RowColHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowColHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowColHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
