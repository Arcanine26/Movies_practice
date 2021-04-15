const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastWatch1 = prompt('Один из последних просмотренных фильмов?', ''),
      rating1 = prompt('На сколько вы оцените его?'),
      lastWatch2 = prompt('Один из последних просмотренных фильмов?', ''),
      rating2 = prompt('На сколько вы оцените его?');
personalMovieDB.movies[lastWatch1] = rating1;
personalMovieDB.movies[lastWatch2] = rating2;
console.log(personalMovieDB);