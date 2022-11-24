
// gioco dei dadi

const dadiGiocatore = Math.round(Math.random() * 5) + 1;
const dadiComputer = Math.round(Math.random() * 5) + 1;

if(dadiGiocatore > dadiComputer){
    console.log("numero dadi giocatore",dadiGiocatore);
    console.log("numero dadi computer",dadiComputer);
    console.log("Ha vinto il giocatore");
}
else if(dadiComputer > dadiGiocatore){
    console.log("numero dadi giocatore", dadiGiocatore);
    console.log("numero dadi computer", dadiComputer);
    console.log("Ha vinto il computer");
}

// -----------------------------------------

