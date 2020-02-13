import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Output() searchTermUpdated = new EventEmitter<string>();
  formGroup: FormGroup;
  private componentDestroyed$: Subject<any>;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.componentDestroyed$ = new Subject<any>();
    this.formGroup = this.formBuilder.group({
      searchTerm: ['']
    });

    this.formGroup.get('searchTerm').valueChanges.pipe(
      takeUntil(this.componentDestroyed$),
      debounceTime(250),
    ).subscribe(value => {
        if (value) {
          this.searchTermUpdated.emit(value);
        }
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
