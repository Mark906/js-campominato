var bombe = []; //Creo un vettore che conterrà i valori bomba generati random a seconda del livello.
var tasselli = [];
var difficoltà = livello(); //Assegno alla variabile difficoltà il valore tornato dalla funzione livello().
var boom = false; //Instauro una variabile booleana utilizzata per il check.
var punteggio = 0; //Assegno al punteggio un valore iniziale pari a 0.

for (var i = 0; i < 16; i++) { //Via for, riempio il vettore delle bombe.
    bombe[i] = Math.floor(Math.random() * difficoltà) + 1;
}
console.log(bombe); //Non dovrebbe essere visibile '-'

punteggio = risultato(); //Determino il punteggio tramite la funzione risultato().

if(punteggio == (difficoltà-16)) { //Se il punteggio è uguale alla differenza tra il valore tornato dalla funzione livello ed il numero di bombe, l'utente ha vinto.
    console.log('Complimenti! Hai vinto!.');
}

console.log('Il tuo punteggio: ' + punteggio); //Stampo il punteggio.

//-----------------------------------------------------------------------------------------------------------------------------

function livello(){ //Questa funzione determinerà la facilità con cui incontrare le bombe assegnandone i valori a seconda della scelta.

    //creo una variabile scelta, in base ad essa si determinerà la difficoltà del gioco.
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

function checkbomb(a,b){ //Questa funzione verificherà se il numero inserito da utente troverà una bomba o meno.
    for (var i = 0; i < 16; i++) {
        if(a == b[i]){
            boom = true;
        }
    }
    return boom;
}

function check(a,j){ //Questa funzione verificherà se il numero inserito da utente trova un tassello occupato.
    var bool = false;
    //Scorro il vettore dal precedente numero inserito sino al suo primo elemento confrontandolo con il numero appena inserito dall'utente.
    for ( i = (j-1); i >= 0; i--) {
        if(a == tasselli[i]){
            bool = true;
        }
    }
    return bool;
}

function risultato(){ //Questa funzione determinerà il risultato del punteggio.
    var n_utente;
    //creo la variabile point come valore di ritorno, determinando il risultato dell'utente.
    var point = 0;

    //creo due variabili booleane, locali, utili ai fini delle funzioni check.
    var controllonumero = false;
    var controllobombe = false;

    //creo un for con una doppia condizione di permanenza, la prima con i < del numero massimo di tasselli, la seconda che i numeri inseriti da utente non siano bombe.
    for(var i=0; i<(difficoltà-16) && controllobombe == false; i++){

            do{

                do{
                    n_utente = parseInt(prompt('Inserisci il ' + (i+1) + ' numero: '));
                    tasselli[i] = n_utente;
                } while((n_utente<1 || n_utente > difficoltà));

                controllonumero = check(n_utente,i);

            } while(controllonumero == true);

            controllobombe = checkbomb(n_utente,bombe);

            if(controllobombe) { console.log('Hai perso!'); }
            point++;
    }

    console.log(tasselli);
    return (point-1);
}
