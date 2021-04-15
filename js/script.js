const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const lastWatch = prompt('Один из последних просмотренных фильмов?', ''),
          rating = prompt('На сколько вы оцените его?');
    
    if (lastWatch != null && rating != null && lastWatch != '' && rating != '' && lastWatch.length < 50){
        personalMovieDB.movies[lastWatch] = rating;
        console.log('Done');
    } else {
        alert('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы - киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);