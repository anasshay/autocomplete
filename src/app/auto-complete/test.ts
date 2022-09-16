import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

import { UP_ARROW, DOWN_ARROW, ENTER } from '@angular/cdk/keycodes';

interface Option {
  value: string;
  name?: string;
  img?: string;
  username?: string;
}

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownListComponent implements OnInit, OnDestroy {
  // @Input('id') id: string = "";
  @Input('value') value: string = "";
  @Input('options') listOfOptions: Option[] = [{ value: "" }];
  @Input('arrow') withArrow: boolean = false;

  @ContentChild('valueTemplate', { static: false }) valueTemplateRef!: TemplateRef<any>;
  @ContentChild('optionTemplate', { static: false }) optionTemplateRef!: TemplateRef<any>;

  @ViewChild('dropdownListRef') dropdownListRef!: ElementRef<HTMLDivElement>;
  onExternalClickSubscription = new Subscription();
  onExternalClickObservable: Observable<Event> = fromEvent(window, 'click');

  @ViewChild('panelRef', { static: false }) panelRef!: ElementRef;

  @ViewChildren('optionRowRef') optionRowRef!: QueryList<ElementRef>;

  @Output('change') change = new EventEmitter();


  valueObject: any;
  openPanelStatus: boolean = false;
  activeIndex: number = 0;

  keyboardEventsManager!: ListKeyManager<any>;

  constructor() { }


  ngOnInit(): void {
    let selectedOptionIndex = this.listOfOptions.findIndex(optionObject => optionObject.value === this.value);

    this.activeIndex = selectedOptionIndex;
    this.valueObject = this.listOfOptions[selectedOptionIndex];

    this.onExternalClickSubscription = this.onExternalClickObservable.subscribe(
      (event: any) => {
        if (!this.dropdownListRef.nativeElement.contains(event.target)) {
          this.openPanelStatus = false;
        }
      }
    );
  }

  ngAfterViewInit() {

  }



  handleKeydown(event: KeyboardEvent) {
    event.stopImmediatePropagation();

    let activeElement = document.activeElement as HTMLElement;

    if (event.keyCode === DOWN_ARROW) {
      let nextElement = activeElement?.nextElementSibling;
      if (nextElement) {
        this.changeFocusedElement(activeElement, nextElement);
      }
    }
    else if (event.keyCode === UP_ARROW) {

      let previousElement = activeElement?.previousElementSibling;
      if (previousElement) {
        this.changeFocusedElement(activeElement, previousElement);
      }
    }
    else if (event.keyCode === ENTER) {
    }
  }

  changeFocusedElement(activeElement: Element, otherElement: Element) {
    let activeHtmlElement = activeElement as HTMLElement;
    activeHtmlElement.tabIndex = -1;

    let otherHtmlElement = otherElement as HTMLElement;
    otherHtmlElement.tabIndex = 0;
    otherHtmlElement.focus();
  }

  ngOnDestroy(): void {
    this.onExternalClickSubscription.unsubscribe();
  }
}
