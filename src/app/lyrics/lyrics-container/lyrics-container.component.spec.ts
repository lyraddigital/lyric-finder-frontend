import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsContainerComponent } from './lyrics-container.component';

describe('LyricsContainerComponent', () => {
  let component: LyricsContainerComponent;
  let fixture: ComponentFixture<LyricsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
