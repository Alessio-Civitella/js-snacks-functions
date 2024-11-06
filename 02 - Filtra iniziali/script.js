/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/**
 * 
 * @param {Array} namesArray 
 * @param {string} lettera 
 * @returns {Array}
 */
function filtraPerLettera(namesArray, lettera) {
    const risultato = [];  // Array per i nomi che iniziano con la lettera richiesta
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i][0] === lettera) {  // Controlla se il primo carattere è uguale alla lettera richiesta
            risultato.push(namesArray[i]);  // Aggiunge il nome all'array risultato
        }
    }
    return risultato;  // Restituisce l'array dei nomi che iniziano con la lettera richiesta
}


// Invoca la funzione qui e stampa il risultato in console

const risultato = filtraPerLettera(names, "A");
console.log(risultato);  

// Risultato atteso: ["Anna", "Adele", "Alessandra"]
