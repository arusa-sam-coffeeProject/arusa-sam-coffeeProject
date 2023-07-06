
"use strict";

function renderCoffee(coffee) {
    let html = `
        <div class="coffee card-bgg">
            <h2 class="coffee-card">${coffee.name}</h2>
            <p>${coffee.roast}</p>
        </div>
    `;

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
    // e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let searchValue = searchInput.value.trim().toLowerCase(); // Get the search term and convert to lowercase
    let filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (
            selectedRoast === 'all' ||
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

// submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('input', updateCoffees);

coffeesContainer.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener('input', updateCoffees);

const addCoffeeForm = document.getElementById('add-coffee-form');

addCoffeeForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const coffeeNameInput = document.getElementById('coffee-name');
    const coffeeRoastInput = document.getElementById('coffee-roast');

    const coffee = {
        id: coffees.length + 1, // Generate a unique ID for the new coffee
        name: coffeeNameInput.value,
        roast: coffeeRoastInput.value
    };

    coffees.push(coffee); // Add the new coffee to the array

    // Store the updated coffees array in local storage
    localStorage.setItem('coffees', JSON.stringify(coffees));

    coffeesContainer.innerHTML = renderCoffees(coffees); // Update the coffee list on the page

    addCoffeeForm.reset(); // Reset the form inputs
});

function hideBeanPopup() {
    console.log("hi")
    let beanPopup = document.getElementById('beanScoop');
    beanPopup.style.display = 'none';
    // Set a cookie here to remember user preference if necessary
}

document.getElementById('allow-btn').addEventListener('click', hideBeanPopup);
document.getElementById('deny-btn').addEventListener('click', hideBeanPopup);










