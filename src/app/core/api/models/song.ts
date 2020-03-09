import { Artist } from './artist';
import { Album } from './album';

export interface Song {
    title_short: string;
    artist: Artist;
    album: Album;
}
