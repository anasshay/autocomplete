import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, Subscription, fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { map } from 'rxjs/operators';

export class Item {
  constructor(public id: number, public name: string) {}
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent implements OnInit, OnDestroy {
  itemCtrl: FormControl;
  filteredItems: Observable<any[]>;
  inputOnFocus: boolean = false;

  @Input('dataSource') dataSource: Item[] = [];
  @Input('placeHolder') placeHolder: string = '';
  @Input('outlineColor') outlineColor: string = '';
  @Input('borderColor') borderColor: string = '';
  @Input('width') width: string = '';
  @Input('inputFontFamily') inputFontFamily: string = '';

  @Output('onSelectItem') onSelectItem: EventEmitter<Item> = new EventEmitter();

  @ViewChild('hostRef') hostRef!: ElementRef<HTMLDivElement>;
  @ContentChild('rowTemplate', { static: false }) headerTemplateRef:
    | TemplateRef<any>
    | undefined;

  onExternalClickSubscription = new Subscription();
  onExternalClickObservable: Observable<Event> = fromEvent(window, 'click');

  constructor() {
    this.itemCtrl = new FormControl();
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(''),
      map((inputText) => {
        if (typeof inputText === 'object') {
          return this.filterItems('');
        } else if (inputText) {
          return this.filterItems(inputText);
        } else {
          return this.dataSource;
        }
      })
    );
  }

  ngOnInit(): void {
    this.onExternalClickSubscription = this.onExternalClickObservable.subscribe(
      (event: any) => {
        if (!this.hostRef.nativeElement.contains(event.target)) {
          this.inputOnFocus = false;
        }
      }
    );
  }

  filterItems(name: string) {
    return this.dataSource.filter((item) =>
      item.name.toLocaleLowerCase().includes(name.toLowerCase())
    );
  }

  selectItem(item: Item) {
    this.itemCtrl.patchValue('');
    this.inputOnFocus = false;
    this.onSelectItem.emit(item);
  }

  ngOnDestroy(): void {
    this.onExternalClickSubscription.unsubscribe();
  }
}
