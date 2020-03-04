import { Component, EventEmitter, OnDestroy, OnInit, Output, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ldsc-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnDestroy, OnInit {
  @Input() initialValue: string;
  @Output() searchTermUpdated = new EventEmitter<string>();

  formGroup: FormGroup;
  private componentDestroyed$: Subject<any>;
  private searchTermFormControl: AbstractControl;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.configureForm();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  clearSearch(): void {
    this.formGroup.reset();
  }

  get searchBeingPerformed(): boolean {
    return this.searchTermFormControl.value && this.searchTermFormControl.value.length > 0;
  }

  private configureForm(): void {
    this.formGroup = this.formBuilder.group({
      searchTerm: [this.initialValue]
    });

    this.searchTermFormControl = this.formGroup.get('searchTerm');

    this.searchTermFormControl.valueChanges.pipe(
      debounceTime(200),
      takeUntil(this.componentDestroyed$)
    ).subscribe(value => {
      this.searchTermUpdated.emit(value);
    });
  }
}
