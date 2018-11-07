import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemCreateComponent } from './lineitem-create.component';

describe('LineitemCreateComponent', () => {
  let component: LineItemCreateComponent;
  let fixture: ComponentFixture<LineItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
