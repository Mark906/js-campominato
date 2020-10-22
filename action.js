var bombe = []; //Creo un vettore che conterrà i valori bomba generati random a seconda del livello.
var difficoltà = livello(); //Assegno alla variabile difficoltà il valore tornato dalla funzione livello().
var boom = false; //Instauro una variabile booleana utilizzata per il check.
var punteggio = 0; //Assegno al punteggio un valore iniziale pari a 0.

for (var i = 0; i < 16; i++) { //Via for, riempio il vettore delle bombe.
    bombe[i] = Math.floor(Math.random() * difficoltà) + 1;
}
console.log(bombe); //Non dovrebbe essere visibile '-'

punteggio = risultato(); //Determino il punteggio tramite la funzione risultato().

console.log('Il tuo punteggio: ' + (punteggio-1)); //Stampo il punteggio.

//-----------------------------------------------------------------------------------------------------------------------------

function livello(){ //Questa funzione determinerà la facilità con cui incontrare le bombe assegnandone i valori a seconda della scelta.
    var scelta;
    do{
        scelta = parseInt(prompt('Inserisci livello di difficoltà: 0-Facile, 1-Medio, 2-Difficile: '));
    }while (scelta < 0 || scelta > 2)

    if (scelta == 0) {
        var n = 100;
    } else if (scelta == 1) {
        var n = 80;
    } else {
        var n = 50;
    }
    return n;
}

function check(a,b){ //Questa funzione verificherà se il numero inserito da utente troverà una bomba o meno.
    for (var i = 0; i < 16; i++) {
        if(a == b[i]){
            boom = true;
        }
    }
    return boom;
}

function risultato(){ //Questa funzione determinerà il risultato del punteggio.
    var n_utente;
    var point = 0;
    do {
        do{
            n_utente = parseInt(prompt('Inserisci il numero: '));
        }while (n_utente > difficoltà || n_utente < 1)

        boom = check(n_utente, bombe);

        point++;
    } while(boom == false)
    return point;
}
