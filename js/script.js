const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);
const lastWatch = prompt('Один из последних просмотренных фильмов?', '');
const lastWatch2 = prompt('Один из последних просмотренных фильмов?', '')
const rating = prompt('На сколько оцените первый фильм', '');
const rating2 = prompt('На сколько оцените второй фильм', '');
let movies = {
    [lastWatch]: rating,
    [lastWatch2]: rating2
};
console.log(movies);