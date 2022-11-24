
// gioco dei dadi

const dadiGiocatore = Math.floor(Math.random() * 6) + 1;
const dadiComputer = Math.floor(Math.random() * 6) + 1;

const bottoneDadi = document.querySelector("a.btn-secondary");


bottoneDadi.addEventListener("click", function(){

    if (dadiGiocatore > dadiComputer) {
        console.log("numero dadi giocatore", dadiGiocatore);
        console.log("numero dadi computer", dadiComputer);
        console.log("Ha vinto il giocatore");
        document.getElementById("dadiGiocatore").innerHTML = "Numero dadi giocatore: " + dadiGiocatore;
        document.getElementById("dadiComputer").innerHTML = "Numero dadi computer: " + dadiComputer;
        document.getElementById("esito").innerHTML = "Ha vinto il giocatore";
    }
    else if (dadiComputer > dadiGiocatore) {
        console.log("numero dadi giocatore", dadiGiocatore);
        console.log("numero dadi computer", dadiComputer);
        console.log("Ha vinto il computer");
        document.getElementById("dadiGiocatore").innerHTML = "Numero dadi giocatore: " + dadiGiocatore;
        document.getElementById("dadiComputer").innerHTML = "Numero dadi computer: " + dadiComputer;
        document.getElementById("esito").innerHTML = "Ha vinto il computer";
    }
    else {
        console.log("numero dadi giocatore", dadiGiocatore);
        console.log("numero dadi computer", dadiComputer);
        console.log("Patta");
        document.getElementById("dadiGiocatore").innerHTML = "Numero dadi giocatore: " + dadiGiocatore;
        document.getElementById("dadiComputer").innerHTML = "Numero dadi computer: " + dadiComputer;
        document.getElementById("esito").innerHTML = "Patta";
    }


});



// -----------------------------------------

// controllo email


const bottone = document.querySelector("a.btn-primary");
const emailUser = document.getElementById("emailUser");


const emailList = ["fabiovolo@gmail.com", "pinopanzerotto@libero.it", "tizioqualsiasi@gmail.com", "emailanonima@anonymous.org"];



bottone.addEventListener("click", function(){
    
    /*

    const ugualeEmail = (element) => element == emailUser.value;

    // console.log(emailList.some(ugualeEmail));

    if (emailList.some(ugualeEmail) == true){
        console.log("La tua email è presente nel database");
    }else{
        console.log("La tua email non è presente nel database");
    }

    */


    
    let emailTrovata = false;
    // let contatore  = 0;
    for(let i = 0; i< emailList.length; i++){   
        
        
        if (emailUser.value == emailList[i]) {
            emailTrovata = true
            // contatore++;
        }

        
    
    }

    if(emailTrovata)
    // if(contatore == 1)
    {
        document.getElementById("output").innerHTML = "La tua email è presente nel database";
        console.log("La tua email è presente nel database");
    }
    else{
        document.getElementById("output").innerHTML = "La tua email non è presente nel database";
        console.log("La tua email non è presente nel database");
    }



});

