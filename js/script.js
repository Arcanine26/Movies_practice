const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
for (let i = 0; numberOfFilms.length <= i; i++){
    alert('Ошибка');
    const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    if (numberOfFilms.length > 0) {
        break;
    }
}
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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы - киноман');
} else {
    console.log('Произошла ошибка');
}