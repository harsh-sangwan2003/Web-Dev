//Q- Write a script which keeps checking the password being entered.
//It should check if capslock is on or off
//if its on it should not allow to type and show "caps on" on screen,
// also it should only allow to type if the shift in pressed down.

//   Solution :

let isCaps = true;
let input = document.querySelector('#pass');
let text = document.querySelector('p');
let isShift = false;

input.addEventListener('keypress', function (e) {

    if (e.getModifierState('CapsLock')) {

        text.style.display = 'block';
        e.preventDefault();
    }

    else {

        text.style.display = 'none';
    }

    if (!isShift) e.preventDefault();
});

document.addEventListener('keydown',function(e){

    if(e.key=="Shift")
    isShift = true;
})

document.addEventListener('keyup',function(e){

    if(e.key=='Shift')
    isShift = false;
})