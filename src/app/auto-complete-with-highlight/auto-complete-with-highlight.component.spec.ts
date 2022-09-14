import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteWithHighlightComponent } from './auto-complete-with-highlight.component';

describe('AutoCompleteWithHighlightComponent', () => {
  let component: AutoCompleteWithHighlightComponent;
  let fixture: ComponentFixture<AutoCompleteWithHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleteWithHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteWithHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
