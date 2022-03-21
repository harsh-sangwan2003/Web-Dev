//Q The following code is broken. Even when clicked on yellow,
//its alerted that red is clicked. Fix it

let red = document.querySelector(".red");

// Fix the code - 

red.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) alert('red was clicked')

    else {
        alert('Yellow was Clicked')
    }
});