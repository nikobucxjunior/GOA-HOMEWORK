// 2) arrMovieNames
const arrMovieNames = [
    "The Orville",
    "The Big Bang Theory",
    "The Rookie",
    "Suits",
    "Lucifer",
    "Scorpion",
    "Top Gun: Maverick",
    "Rush Hour 1, 2, 3",
    "Bad Boys",
    "Reacher"
];

function displayMovies() {
    const movieList = arrMovieNames.map(movie => `<li>${movie}</li>`).join('');
    document.getElementById('movie-list').innerHTML = movieList;
}

displayMovies();

// 3) arrNav
const arrNav = [
    "About",
    "Contact",
    "Home",
    "Services",
    "Gallery",
    "Blog"
];

function displayNavigation() {
    const navList = arrNav.map(navItem => `<li>${navItem}</li>`).join('');
    document.getElementById('nav-list').innerHTML = navList;
}

displayNavigation();