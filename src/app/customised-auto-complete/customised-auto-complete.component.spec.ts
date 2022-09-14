import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedAutoCompleteComponent } from './customised-auto-complete.component';

describe('CustomisedAutoCompleteComponent', () => {
  let component: CustomisedAutoCompleteComponent;
  let fixture: ComponentFixture<CustomisedAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomisedAutoCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomisedAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
