import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-test-template',
  templateUrl: './test-template.component.html',
  styleUrls: ['./test-template.component.css'],
})
export class TestTemplateComponent<T extends { name: string }> {
  picked!: T;

  @Input()
  label!: string;
  @Input()
  options!: T[];

  @Input('selectedTemplate')
  selectedTemplateRef!: TemplateRef<any>;

  @ContentChild('optionTemplate', { static: false })
  optionTemplateRef!: TemplateRef<any>;

  @Output()
  selectionChanged = new EventEmitter<T>();

  selectOption(option: T) {
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}
