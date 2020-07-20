function randomImages(){
var randomNo1 = Math.floor(Math.random() * 6) + 1;    //Random number generator
var randDiceImg = randomNo1 + ".png";
var randImgSrc = "images/" + randDiceImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImgSrc);

// Second Dice 
var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randImgSrc2 = "images/" + randomNo2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randImgSrc2);

// Deciding Winner 
if (randomNo1 == randomNo2) {
        document.querySelector("h1").innerHTML = "Draw";
}
else if (randomNo1 > randomNo2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
}

function reset(){
    document.querySelector("h1").innerHTML = "Roll It";
}