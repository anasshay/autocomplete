import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export class State {
  constructor(public id: number, public name: string, public pic: string) {}
}

/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'app-auto-complete-with-highlight',
  templateUrl: 'auto-complete-with-highlight.component.html',
  styleUrls: ['auto-complete-with-highlight.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AutoCompleteWithHighlightComponent {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  toHighlight: string = '';

  @ContentChild('icon', { static: false }) headerTemplateRef:
    | TemplateRef<any>
    | undefined;

  @Input() dataSource: State[] = [];
  @Input('placeHolder') placeHolder: string = '';
  @Input('highlight') highlight: boolean = false;

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((inputText) => {
        if (typeof inputText === 'object') {
          return this.filterStates('');
        } else if (inputText) {
          return this.filterStates(inputText);
        } else {
          this.toHighlight = '';
          return this.dataSource;
        }
      })
    );
  }

  filterStates(name: string) {
    this.toHighlight = name;
    return this.dataSource.filter((item) =>
      item.name.toLocaleLowerCase().includes(name.toLowerCase())
    );
  }

  getSelectedItem($event: any) {
    console.log($event.option.value);
    this.toHighlight = '';
    this.stateCtrl.patchValue('');
  }
}
