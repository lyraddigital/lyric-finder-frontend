import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should contain the component 'ldsc-lyrics-container'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const lyricsContainerDe = fixture.debugElement.query(By.css('ldsc-lyrics-container'));

    expect(lyricsContainerDe).toBeTruthy();
  });

  it('should show correct title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const titleTextDe = fixture.debugElement.query(By.css('mat-toolbar span'));

    expect(titleTextDe.nativeElement.textContent).toContain('Lyrics Finder');
  });

  it('should show the correct icon in the toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const toolbarIcon = fixture.debugElement.query(By.css('mat-toolbar mat-icon'));

    expect(toolbarIcon.nativeElement.textContent).toContain('queue_music');
  });
});
