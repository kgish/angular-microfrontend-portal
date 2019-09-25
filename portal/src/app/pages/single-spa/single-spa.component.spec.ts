import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSpaComponent } from './single-spa.component';

describe('SingleSpaComponent', () => {
  let component: SingleSpaComponent;
  let fixture: ComponentFixture<SingleSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
