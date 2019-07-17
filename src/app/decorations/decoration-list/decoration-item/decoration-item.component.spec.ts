import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationItemComponent } from './decoration-item.component';

describe('DecorationItemComponent', () => {
  let component: DecorationItemComponent;
  let fixture: ComponentFixture<DecorationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
