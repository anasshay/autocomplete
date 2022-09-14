import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateChild1Component } from './test-template-child1.component';

describe('TestTemplateChild1Component', () => {
  let component: TestTemplateChild1Component;
  let fixture: ComponentFixture<TestTemplateChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTemplateChild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTemplateChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
