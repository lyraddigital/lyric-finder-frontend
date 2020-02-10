import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { LyricsModule } from 'src/app/lyrics';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule,
        LyricsModule
      ],
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

  it(`should contain the component 'app-lyrics-container'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const lyricsContainerDe = fixture.debugElement.query(By.css('app-lyrics-container'));

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
