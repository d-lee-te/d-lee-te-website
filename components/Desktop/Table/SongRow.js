'use client';

import SongTitleCell from './SongTitleCell';
import ArtistCell from './ArtistCell';

export default function SongRow({ song, isPaused }) {
  return (
    <tr>
      <SongTitleCell song={song} isPaused={isPaused} />
      <ArtistCell artists={song.track.artists} isPaused={isPaused} />
    </tr>
  );
}
