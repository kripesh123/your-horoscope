import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSignComponent } from './general-sign.component';

describe('GeneralSignComponent', () => {
  let component: GeneralSignComponent;
  let fixture: ComponentFixture<GeneralSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
