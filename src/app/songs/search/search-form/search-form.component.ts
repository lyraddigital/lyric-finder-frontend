import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Output() searchTermUpdated = new EventEmitter<string>();
  formGroup: FormGroup;
  private searchTermFormControl: AbstractControl;
  private componentDestroyed$: Subject<any>;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.componentDestroyed$ = new Subject<any>();
    this.formGroup = this.formBuilder.group({
      searchTerm: ['']
    });

    this.searchTermFormControl = this.formGroup.get('searchTerm');

    this.searchTermFormControl.valueChanges.pipe(
      takeUntil(this.componentDestroyed$),
    ).subscribe(value => {
      this.searchTermUpdated.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  clearSearch() {
    this.formGroup.reset();
  }

  get searchBeingPerformed() {
    return this.searchTermFormControl.value && this.searchTermFormControl.value.length > 0;
  }
}
