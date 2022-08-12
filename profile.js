function favColor() {
    alert('My favorite color is purple!')
}

function favPlace() {
    alert('My favorite place is Oregon!')
}

function favRitual() {
    alert('My favorite ritual is shedding blood of the innocent!')
}

let fColor = document.querySelector('#color');

fColor.addEventListener('click', favColor);

let fPlace = document.querySelector('#place');

fPlace.addEventListener('click', favPlace);

let fRitual = document.querySelector('#ritual');

fRitual.addEventListener('click', favRitual)