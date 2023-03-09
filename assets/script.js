/* Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

// Chiedi all'utente i km da percorrere e l'età
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click',function() {
    let userNameInput = document.getElementById('name');
    let kmInput = (document.getElementById('km'));
    let ageInput = document.getElementById('eta');

    let userName = userNameInput.value;
    let km = kmInput.value;
    let age = ageInput.value;

    console.log(userName, km, age);
})

let userAge = document.getElementById('eta')
let kmToDo = document.getElementById('km')
console.log('userAge', 'kmToDo');
    

// Calcola il prezzo del biglietto
const pricePerKm = 0.21;
let totalPrice = kmToDo * pricePerKm;
console.log(totalPrice);

// Applica lo sconto per i minorenni e gli over 65

 if (userAge == document.getElementById('under')) {
  discount =  0.2; // Sconto del 20%
} else if (userAge == document.getElementById('over')) {
  discount = 0.4; // Sconto del 40%
}

// let totalDiscount = totalPrice * discount;
// console.log(totalDiscount);

// let ticketPrice = totalPrice - totalDiscount;
// console.log(ticketPrice);


// // Mostra il prezzo finale
// document.getElementById('demo').innerHTML = ("Il prezzo del tuo biglietto è di €" + totalPrice.toFixed(2));