function diceRole() {
   var dice1 = Math.floor(Math.random() * 6) + 1;
   var dice2 = Math.floor(Math.random() * 6) + 1;

   var dice1attr = "images/dice" + dice1.toString() + ".png";
   var dice2attr = "images/dice" + dice2.toString() + ".png";

    document.querySelector(".img1").setAttribute("src", dice1attr);
    document.querySelector(".img2").setAttribute("src", dice2attr);

    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    } 

    else if (dice1 < dice2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    }

    else if (dice1 === dice2) {
        document.querySelector("h1").innerHTML = "Draw!"
    }
    
}