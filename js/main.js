
"use strict";

function renderCoffee(coffee) {
    let html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let sortedCoffees = coffees.slice().sort((a, b) => a.id - b.id); // Create a sorted copy of the coffees array
    let html = '';
    for (let i = 0; i < sortedCoffees.length; i++) {
        html += renderCoffee(sortedCoffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let searchValue = searchInput.value.trim().toLowerCase(); // Get the search term and convert to lowercase
    let filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (
            coffee.roast === selectedRoast &&
            coffee.name.toLowerCase().includes(searchValue)
        ) {
            filteredCoffees.push(coffee);
        }
    });

    coffeesContainer.innerHTML = renderCoffees(filteredCoffees);
}
let searchInput = document.getElementById('search');
searchInput.addEventListener('input', updateCoffees);

// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     let selectedRoast = roastSelection.value;
//     let filteredCoffees = [];
//     coffees.forEach(function (coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     coffeesContainer.innerHTML = renderCoffees(filteredCoffees);
// }

let coffees = [
    { id: 1, name: 'Light City', roast: 'light' },
    { id: 2, name: 'Half City', roast: 'light' },
    { id: 3, name: 'Cinnamon', roast: 'light' },
    { id: 4, name: 'City', roast: 'medium' },
    { id: 5, name: 'American', roast: 'medium' },
    { id: 6, name: 'Breakfast', roast: 'medium' },
    { id: 7, name: 'High', roast: 'dark' },
    { id: 8, name: 'Continental', roast: 'dark' },
    { id: 9, name: 'New Orleans', roast: 'dark' },
    { id: 10, name: 'European', roast: 'dark' },
    { id: 11, name: 'Espresso', roast: 'dark' },
    { id: 12, name: 'Viennese', roast: 'dark' },
    { id: 13, name: 'Italian', roast: 'dark' },
    { id: 14, name: 'French', roast: 'dark' },
];

let coffeesContainer = document.getElementById('coffees');
let submitButton = document.getElementById('submit');
let roastSelection = document.getElementById('roast-selection');

coffeesContainer.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

