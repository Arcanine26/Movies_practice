const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let i = 0;
// while (i < 2) {
//     const lastWatch = prompt('Один из последних просмотренных фильмов?', ''),
//           raiting = prompt('На сколько вы оцените его?');
//     i++;
//     if (lastWatch != null && raiting != null && lastWatch != '' && raiting != '' && lastWatch.length < 50){
//         personalMovieDB.movies[lastWatch] = raiting;
//         console.log('Done');
//     } else {
//         alert('Error');
//         i--;
//     }
// }

// do {
//     const lastWatch = prompt('Один из последних просмотренных фильмов?', ''),
//           raiting = prompt('На сколько вы оцените его?');
//     i++;
//     if (lastWatch != null && raiting != null && lastWatch != '' && raiting != '' && lastWatch.length < 50){
//         personalMovieDB.movies[lastWatch] = raiting;
//         console.log('Done');
//     } else {
//         alert('Error');
//         i--;
//     }
// }
// while(i < 2);

for (let i = 0; i < 2; i++){
    const lastWatch = prompt('Один из последних просмотренных фильмов?', ''),
          raiting = prompt('На сколько вы оцените его?');
    
    if (lastWatch != null && raiting != null && lastWatch != '' && raiting != '' && lastWatch.length < 50){
        personalMovieDB.movies[lastWatch] = raiting;
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