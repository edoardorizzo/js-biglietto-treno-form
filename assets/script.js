/* Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

// Chiedi all'utente i km da percorrere e l'età
const km = Number("Quanti chilometri vuoi percorrere?");
const age = Number("Qual è la tua età?");

console.log(km, age);

// Calcola il prezzo del biglietto
const pricePerKm = 0.21;
let totalPrice = km * pricePerKm;

console.log(totalPrice);

// Applica lo sconto per i minorenni e gli over 65
if (age < 18) {
  discount =  0.2; // Sconto del 20%
} else if (age >= 65) {
  discount = 0.4; // Sconto del 40%
}

let totalDiscount = totalPrice * discount;
console.log(totalDiscount);

let ticketPrice = totalPrice - totalDiscount;
console.log(ticketPrice);


// Mostra il prezzo finale
document.getElementById('demo').innerHTML = ("Il prezzo del tuo biglietto è di €" + totalPrice.toFixed(2));