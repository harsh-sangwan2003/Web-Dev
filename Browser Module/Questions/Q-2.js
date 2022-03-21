// Fix the list by inserting the missing element using querySelectorAll and insertBefore
let list = document.querySelector('ul');

let allListItems = document.querySelectorAll('li');
let eightEle = allListItems[6];

let sevenEle = document.createElement('li');
sevenEle.innerText = '7';

list.insertBefore(sevenEle, eightEle);