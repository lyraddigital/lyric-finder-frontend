import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { HistoryService } from 'src/app/core';

@Component({
  selector: 'ldsc-history-navigation-buttons',
  templateUrl: './history-navigation-buttons.component.html',
  styleUrls: ['./history-navigation-buttons.component.scss']
})
export class HistoryNavigationButtonsComponent implements OnInit {
  backButtonDisabled = true;
  forwardButtonDisabled = true;

  constructor(
    private readonly location: Location,
    private readonly historyService: HistoryService
  ) { }

  ngOnInit() {
    this.historyService.onNavigationStateChanged().subscribe(state => {
      this.backButtonDisabled = !state.canGoBack;
      this.forwardButtonDisabled = !state.canGoForward;
    });
  }

  navigateBack() {
    this.location.back();
  }

  navigateForward() {
    this.location.forward();
  }
}
