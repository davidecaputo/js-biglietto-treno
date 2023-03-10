/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

creiamo una variabile per i chilometri che si vogliono percorrere
creiamo una variabile per l'età dell'utente
creiamo una variabile dove viene definito il prezzo del biglietto in base ai km
creiamo una variabile per lo sconto ai minorenni
creiamo una variabile per lo sconto agli over 65

*/

let chilometriUtente = parseInt (prompt ('Quanti kilometri vuoi percorrere col treno?'));
let anniUtente = parseInt (prompt ('Quanti anni hai?'));
let prezzoBiglietto = (0.21 * chilometriUtente);
let scontoMinorenni = prezzoBiglietto - (prezzoBiglietto * 0.20);
let scontoOver65 = prezzoBiglietto - (prezzoBiglietto * 0.40);

console.log(prezzoBiglietto);
console.log(scontoMinorenni);
console.log(scontoOver65);


if(!isNaN(chilometriUtente && anniUtente)){
    if (anniUtente <= 18){
        document.getElementById('totale').innerHTML += `
            <h2>${scontoMinorenni.toFixed(2) + '€'}</h2>
        `
    } else if(anniUtente > 65){
        document.getElementById('totale').innerHTML += `
            <h2>${scontoOver65.toFixed(2) + '€'}</h2>    
        `
    } else {
        document.getElementById('totale').innerHTML += `
            <h2>${prezzoBiglietto.toFixed(2) + '€'}</h2>
        `
    }
} else {
    document.getElementById('totale').innerHTML = `
        <h1>${'Inserisci dei valori validi'}</h1>
    `
}