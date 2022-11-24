
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
else{
    console.log("numero dadi giocatore", dadiGiocatore);
    console.log("numero dadi computer", dadiComputer);
    console.log("Patta");
}

// -----------------------------------------

// controllo email


const bottone = document.querySelector("a.btn-primary");
const emailUser = document.getElementById("emailUser");


const emailList = ["fabiovolo@gmail.com", "pinopanzerotto@libero.it", "tizioqualsiasi@gmail.com", "emailanonima@anonymous.org"];


bottone.addEventListener("click",function(){
    

    const ugualeEmail = (element) => element == emailUser.value;

    // console.log(emailList.some(ugualeEmail));


    if (emailList.some(ugualeEmail) == true){
        console.log("La tua email è presente nel database");
    }else{
        console.log("La tua email non è presente nel database");
    }


    // for(let i = 0; i< emailList.length; i++){
       
        
        
    //     if (emailUser.value == emailList[i]) {
    //         console.log("La tua email è presente nel database");
    //     }
    // }




});

