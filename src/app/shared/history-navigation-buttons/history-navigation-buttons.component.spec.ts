import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryNavigationButtonsComponent } from './history-navigation-buttons.component';

describe('HistoryNavigationButtonsComponent', () => {
  let component: HistoryNavigationButtonsComponent;
  let fixture: ComponentFixture<HistoryNavigationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryNavigationButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryNavigationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
