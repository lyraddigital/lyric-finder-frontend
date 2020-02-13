import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SearchResultItem } from './models/search-result-item';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getSearchResults(searchTerm: string): Observable<Array<SearchResultItem>> {
    const query = encodeURIComponent(searchTerm);

    return this.httpClient.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
      headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '5bbc7ff12amsh9cc0cf2626ff24ep157130jsn49b474194ca6'
      }
    }).pipe(
      take(1),
      map((response: any) => {
        if (!response || !response.data) {
          return []
        }

        return response.data.map(r => ({
          songTitle: r.title_short,
          artist: r.artist && r.artist.name ? r.artist.name : '',
          smallThumbnailSrc: r.album && r.album.cover_small ? r.album.cover_small : '',
          largeThumbnailSrc: r.album && r.album.cover_medium ? r.album.cover_medium : ''
        }));
      })
    );

    // return of([
    //   {
    //     songTitle: 'Toxic',
    //     artist: 'Britney Spears',
    //     smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
    //     largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
    //   },
    //   {
    //     songTitle: 'Toxic',
    //     artist: 'Britney Spears',
    //     smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
    //     largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
    //   },
    //   {
    //     songTitle: 'Toxic',
    //     artist: 'Britney Spears',
    //     smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
    //     largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
    //   },
    //   {
    //     songTitle: 'Toxic',
    //     artist: 'Britney Spears',
    //     smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
    //     largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
    //   },
    //   {
    //     songTitle: 'Toxic',
    //     artist: 'Britney Spears',
    //     smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
    //     largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
    //   },
    //   {
    //     songTitle: 'Toxic',
    //     artist: 'Britney Spears',
    //     smallThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/56x56-000000-80-0-0.jpg',
    //     largeThumbnailSrc: 'https://cdns-images.dzcdn.net/images/cover/bd904e47db5549124f099c1fef304dc9/250x250-000000-80-0-0.jpg'
    //   }
    // ]);
  }
}
