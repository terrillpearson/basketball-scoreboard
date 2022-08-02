let homecount = 0;
let guestcount = 0;
let homescoreEl = document.getElementById("homescore-el")
let guestscoreEl = document.getElementById("guestscore-el")

function btn1() {
    homecount+= 1
   homescoreEl.innerText = homecount
}


function btn2() {
    homecount+= 2
   homescoreEl.innerText = homecount
  
}

function btn3() {
    homecount+= 3
   homescoreEl.innerText = homecount
    
}

function btn4() {
    guestcount+= 1
   guestscoreEl.innerText = guestcount
}

function btn5() {
    guestcount+= 2
   guestscoreEl.innerText = guestcount
}

function btn6() {
   guestcount+= 3
   guestscoreEl.innerText = guestcount
}

function reset() {
   guestscoreEl.innerText = 0
   homescoreEl.innerText = 0
   homecount = 0
   guestcount = 0
}

