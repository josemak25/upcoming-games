import { GameGenreInterface } from '../constants';

export default function getGenres(genres: GameGenreInterface[]) {
  if (!genres) return 'Not Available';

  let collection = '';
  let count = 0;

  for (let index = 0; index < genres.length; index++) {
    if (count === 2) break;

    let genre = genres[index].name;

    if (genre === 'Role-playing (RPG)') {
      genre = 'Role-playing';
    }

    if (genre === "Hack and slash/Beat 'em up") {
      genre = 'Hack and slash';
    }

    if (genre.length <= 20) {
      collection += `${genre}, `;
      count++;
    }
  }

  return collection.slice(0, -2);
}
