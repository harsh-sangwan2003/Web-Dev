// Q Write a script which fetches the data-color attribute of the card on double clicking on them and attaches the fetched class to that card. Also changes the data-color attribute to "used"
let allCards = document.querySelectorAll('.card');

for (let card of allCards) {

    card.addEventListener('dblclick', function (e) {

        let color = e.currentTarget.getAttribute('data-color');
        card.classList.add(`${color}`);
    })
}