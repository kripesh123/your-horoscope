import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAscendantComponent } from './general-ascendant.component';

describe('GeneralAscendantComponent', () => {
  let component: GeneralAscendantComponent;
  let fixture: ComponentFixture<GeneralAscendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAscendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAscendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
