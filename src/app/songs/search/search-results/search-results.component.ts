import { Component, OnInit } from '@angular/core';

import { SearchResultItem } from 'src/app/songs/search/models/search-result-item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResults: Array<SearchResultItem>;

  ngOnInit(): void {
    this.searchResults = [
      {
        songTitle: 'Toxic',
        artist: 'Britney Spears',
        smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
        largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
      },
      {
        songTitle: 'Toxic',
        artist: 'Britney Spears',
        smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
        largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
      },
      {
        songTitle: 'Toxic',
        artist: 'Britney Spears',
        smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
        largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
      },
      {
        songTitle: 'Toxic',
        artist: 'Britney Spears',
        smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
        largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
      },
      {
        songTitle: 'Toxic',
        artist: 'Britney Spears',
        smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
        largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
      },
      {
        songTitle: 'Toxic',
        artist: 'Britney Spears',
        smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
        largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
      }
    ];
  }
}
