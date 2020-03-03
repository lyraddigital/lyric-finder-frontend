import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ldsc-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Output() searchTermUpdated = new EventEmitter<string>();
  formGroup: FormGroup;
  private searchTermFormControl: AbstractControl;
  private componentDestroyed$: Subject<any>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.componentDestroyed$ = new Subject<any>();
    this.configureForm();
    this.updateSearchFieldOnLoad();
  }

  ngOnDestroy(): void {
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
      searchTerm: ['']
    });

    this.searchTermFormControl = this.formGroup.get('searchTerm');

    this.searchTermFormControl.valueChanges.pipe(
      takeUntil(this.componentDestroyed$),
    ).subscribe(value => {
      this.searchTermUpdated.emit(value);
    });
  }

  private updateSearchFieldOnLoad(): void {
    this.activatedRoute.params.pipe(
      take(1),
    ).subscribe(p => {
      if (p && p.searchTerm) {
        this.searchTermFormControl.setValue(p.searchTerm, { emitEvent: false });
      }
    });
  }
}
