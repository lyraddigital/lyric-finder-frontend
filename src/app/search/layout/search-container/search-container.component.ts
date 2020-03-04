import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { SearchService } from '../../search.service';

@Component({
  selector: 'ldsc-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit, OnDestroy {
  initialSearchTerm = '';
  formGroup: FormGroup;
  showSearchClearButton = false;

  private componentDestroyed$: Subject<any>;
  private searchTermFormControl: AbstractControl;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.configureForm();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  clearFormGroup() {
    this.formGroup.reset();
  }

  private configureForm(): void {
    this.componentDestroyed$ = new Subject<any>();
    this.formGroup = this.formBuilder.group({
      searchTerm: [this.initialSearchTerm]
    });

    this.searchTermFormControl = this.formGroup.get('searchTerm');

    this.searchTermFormControl.valueChanges.pipe(
      debounceTime(200),
      takeUntil(this.componentDestroyed$)
    ).subscribe(value => {
      this.showSearchClearButton = value && value.length > 0;
      this.searchService.performSearch(value);
    });
  }
}
