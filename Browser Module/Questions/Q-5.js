// Jail The Mouse
// Q You are given an empty cell. Write a script that whenever the mouse enters the cell jail should be drawn over it and it should be removed once it leaves(Hint: Use a background-image to set jail)

let divTag = document.querySelector('.cell');
let img = document.createElement('img');
img.src = 'jail.jpg';

// divTag.addEventListener('mousemove', function () {

//     divTag.appendChild(img);
// });

// divTag.addEventListener('mouseout', function () {

//     divTag.removeChild(img);
// })

divTag.addEventListener('mousemove', function () {

    divTag.style.background = 'url(jail.jpg)';
});

divTag.addEventListener('mouseout', function () {

    divTag.style.background = 'none';
})