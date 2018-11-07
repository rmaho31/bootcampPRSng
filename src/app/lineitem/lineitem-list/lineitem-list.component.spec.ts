import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemListComponent } from './lineitem-list.component';

describe('LineitemListComponent', () => {
  let component: LineItemListComponent;
  let fixture: ComponentFixture<LineItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
