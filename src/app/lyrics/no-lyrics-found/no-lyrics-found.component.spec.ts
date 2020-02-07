import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLyricsFoundComponent } from './no-lyrics-found.component';

describe('NoLyricsFoundComponent', () => {
  let component: NoLyricsFoundComponent;
  let fixture: ComponentFixture<NoLyricsFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLyricsFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLyricsFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
