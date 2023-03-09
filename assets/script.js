/* Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click',function() {
    // Chiedi all'utente il Nome e cognome, i km da percorrere e l'età
    let userNameInput = document.getElementById('name');
    let kmInput = (document.getElementById('km'));
    let ageInput = document.getElementById('eta');

    // Associa i dati inseriti alle variabili
    let userName = userNameInput.value;
    let km = kmInput.value;
    let age = ageInput.value;

    console.log(userName, km, age);

    // Calcola il prezzo del biglietto
    const pricePerKm = 0.21;
    let totalPrice = km * pricePerKm;

    console.log(totalPrice);

    // calcola la percentuale di sconto
    if (age == 'under') {
        discount =  0.2; // Sconto del 20%
    } else if (age == 'over') {
         discount = 0.4; // Sconto del 40%
    }

    // Applica lo sconto per i minorenni e gli over 65
    let totalDiscount = totalPrice * discount;
    console.log(totalDiscount); //totale dello sconto

    let ticketPrice = totalPrice - totalDiscount;
    console.log(ticketPrice); //totale del biglietto

    // sovrascrivi l'HTML con i dati inseriti
    let tipology = ('Biglietto Standard')

    document.getElementById('userName').innerHTML = (userNameInput.value);
    document.getElementById('offerta').innerHTML = (tipology);
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 100);
    document.getElementById("cp").innerHTML = Math.floor(Math.random() * 10000);
    document.getElementById('ticketPrice').innerHTML = parseFloat(ticketPrice).toFixed();
})