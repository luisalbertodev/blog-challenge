import {
  ChangeDetectorRef,
  Component,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { createPopper, Instance } from '@popperjs/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit, OnDestroy {
  maxVisibleOptions = 4;
  visibleOptions = this.maxVisibleOptions;
  searchControl = new FormControl('');

  private view: EmbeddedViewRef<any>;
  private popperRef: Instance = null;
  private originalOptions = [];
  private isDestroyed$ = new Subject();

  @Input() defaultValue: any;
  @Input() labelKey = 'name';
  @Input() idKey = 'code';
  @Input() options = [];
  @Input() model;
  @Input() optionTpl: TemplateRef<any>;

  @Output() selectChange = new EventEmitter();
  @Output() dropdownClosed = new EventEmitter();

  get label() {
    // return this.model ? this.model[this.labelKey] : 'Selecciona un país...';
    return this.model ? this.model : 'Selecciona un país...';
  }

  get isOpen() {
    return !!this.popperRef;
  }

  constructor(
    private vcr: ViewContainerRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.originalOptions = [...this.options];

    this.getInitialValue();
    this.searchControl.valueChanges
      .pipe(debounceTime(300), takeUntil(this.isDestroyed$))
      .subscribe((term) => this.search(term));
  }

  getInitialValue() {
    if (this.model !== undefined) {
      this.model = this.options.find(
        (currentOption) => currentOption[this.idKey] === this.model
      );
    }

    if (this.model === undefined) {
      this.model = this.defaultValue ?? undefined;
    }
  }

  isActive(option) {
    if (!this.model) {
      return false;
    }

    return option[this.idKey] === this.model[this.idKey];
  }

  open(
    dropdownTpl: TemplateRef<any>,
    origin: HTMLButtonElement | HTMLDivElement
  ) {
    if (this.isOpen) {
      return;
    }

    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    const dropdown = this.view.rootNodes[0];
    document.body.appendChild(dropdown);
    dropdown.style.width = `${origin.offsetWidth}px`;
    this.zone.runOutsideAngular(() => {
      this.popperRef = createPopper(origin, dropdown, {
        placement: 'bottom',
      });
    });

    this.handleClickOutside();
  }

  select(option) {
    this.model = option;
    this.selectChange.emit(option[this.idKey]);
  }

  parseStringToLowerCase(text: string = '') {
    return text.toLowerCase().trim();
  }

  search(value: string) {
    this.options = this.originalOptions.filter((option) =>
      this.parseStringToLowerCase(option[this.labelKey]).includes(
        this.parseStringToLowerCase(value)
      )
    );
    this.visibleOptions = this.options.length
      ? this.options.length > this.maxVisibleOptions
        ? this.maxVisibleOptions
        : this.options.length
      : 1;
  }

  close() {
    this.dropdownClosed.emit();
    this.popperRef.destroy();
    this.view.destroy();
    this.searchControl.patchValue('');
    this.view = null;
    this.popperRef = null;
  }

  ngOnDestroy() {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }

  private handleClickOutside() {
    // create observable from click event
    fromEvent(document, 'click')
      .pipe(
        filter(({ target }) => {
          // if target of click in contained in the popper ref return false
          // to not emit in subscription, otherwise emission will close
          // dropdown

          const origin = this.popperRef.state.elements.reference as HTMLElement;
          return origin.contains(target as HTMLElement) === false;
        }),
        takeUntil(this.dropdownClosed)
      )
      .subscribe(() => {
        this.close();
        this.cdr.detectChanges(); // popper outside of ngzone, need to detectchanges
      });
  }
}
