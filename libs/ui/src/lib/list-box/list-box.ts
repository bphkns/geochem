import { DOCUMENT } from '@angular/common';
import {
  Component,
  ContentChild,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Provider,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { TippyDirective } from '@ngneat/helipopper';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { panelInOut } from './animation';
import { ListBoxOptionDirective } from './list-box-option';

const LIST_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ListBoxComponent),
  multi: true,
};

@Component({
  selector: 'geochem-ui-list',
  templateUrl: `./list-box.html`,
  providers: [LIST_CONTROL_VALUE_ACCESSOR],
  animations: [panelInOut],
})
export class ListBoxComponent implements ControlValueAccessor, OnDestroy {
  private _items: any[] = [];
  @Input()
  get items() {
    return this._items;
  }

  set items(items: any[]) {
    items = items || [];
    this._items = [...items];
    this.items$.next(this._items);
  }

  displayItems = [];

  items$ = new BehaviorSubject<any[]>([]);

  @Input()
  loading = true;

  @Input()
  placeholder = 'Select Option';

  @Input()
  searchable = false;

  selected!: any;
  disabled = false;

  @Input()
  hideOnClick = true;

  @ContentChild(ListBoxOptionDirective)
  optionTpl!: ListBoxOptionDirective;

  @ViewChild(TippyDirective)
  tippyDir!: TippyDirective;

  @Input()
  filterKey = 'name';

  @Input()
  labelKey = 'name';

  @Input()
  idKey = 'id';

  // eslint-disable-next-line @typescript-eslint/ban-types
  private onTouched!: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  private onChanged!: Function;

  searchControl = new FormControl('');

  unSub$ = new Subject();

  constructor(@Inject(DOCUMENT) public document: Document) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((val) => {
          const items = val?.trim().length
            ? this.items.filter((item) =>
                item[this.filterKey]?.toLowerCase().includes(val.toLowerCase())
              )
            : [...this.items];
          return of(items);
        }),
        tap((items) => {
          this.items$.next(items);
        }),
        takeUntil(this.unSub$)
      )
      .subscribe();
  }

  selectOption(item: any) {
    this.onTouched(); // <-- mark as touched
    this.selected = item;
    this.onChanged(item); // <-- call function to let know of a change
    this.closeDropdown();
  }

  writeValue(value: string): void {
    this.selected = value ?? null;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    isDisabled ? this.searchControl.disable() : this.searchControl.enable();
  }

  closeDropdown() {
    if (!this.hideOnClick) {
      return;
    }
    this.searchControl.reset();
    this.tippyDir?.hide();
  }

  clear() {
    this.selected = null;
    this.searchControl.reset();
  }

  ngOnDestroy(): void {
    this.unSub$.next(null);
    this.unSub$.complete();

    this.searchControl.reset();
  }

  trackBy(index: number, item: any) {
    return item[this.idKey];
  }
}
