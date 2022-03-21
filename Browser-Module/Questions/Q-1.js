//Q1 on Clicking the Button append hello to the page
// let button = document.getElementsByTagName('button');

let button = document.querySelector("button");

button.addEventListener('click', function (e) {

    let divTag = document.createElement('div');
    let hTag = document.createElement('h1');
    let bTag = document.querySelector('body');

    hTag.innerText = 'hello';

    divTag.appendChild(hTag);
    bTag.appendChild(divTag);

}
);