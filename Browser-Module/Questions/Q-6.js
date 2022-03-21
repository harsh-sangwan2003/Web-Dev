// Q Make the filter work
let selectValue = document.querySelector('select');
let movieArr = document.querySelectorAll('.price');


document.querySelector('select').addEventListener('change', getValue);

function getValue() {

    selectValue = document.querySelector('select').value;

    filterMovies();
}

function filterMovies() {

    for (let movie of movieArr) {

        let type = movie.getAttribute('data-category');

        if (selectValue == 'none')
            movie.parentElement.style.display = 'block';

        else {

            if (type != selectValue)
                movie.parentElement.style.display = 'none';

            else
                movie.parentElement.style.display = 'block';
        }
    }
}