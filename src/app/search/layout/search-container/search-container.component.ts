import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchFormService } from 'src/app/core/search-form.service';

@Component({
  selector: 'ldsc-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly searchFormService: SearchFormService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      if (p && p.searchTerm) {
        this.searchFormService.updateSearchFieldWithTerm(p.searchTerm);
      }
    });
  }
}
