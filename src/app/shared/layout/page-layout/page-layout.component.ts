import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { SearchFormService } from 'src/app/core';

@Component({
  selector: 'ldsc-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  formGroup: FormGroup;
  showSearchClearButton = false;

  private searchTermFormControl: AbstractControl;

  constructor(
    private readonly searchFormService: SearchFormService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      searchTerm: ['']
    });

    this.searchTermFormControl = this.formGroup.get('searchTerm');

    this.searchTermFormControl.valueChanges.subscribe(value => {
      this.showSearchClearButton = value && value.length > 0;
      this.searchFormService.triggerSearchTermUpdate(value);
    });

    this.searchFormService.onSearchFieldRefreshed().subscribe(value => {
      this.searchTermFormControl.setValue(value, { emitEvent: false });
    });
  }

  clearFormGroup() {
    this.formGroup.reset();
  }
}
