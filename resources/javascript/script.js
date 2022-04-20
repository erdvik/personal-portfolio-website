
let coockieButton = document.getElementById('coockie-button');

let coockieImg = document.createElement('img');

coockieImg.src = "resources/images/chocolate-chip-cookie-16.jpg"

coockieButton.onclick = function() {
    document.body.appendChild(coockieImg);
}

let = darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.onclick = function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}


const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "12-10-2017";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);



