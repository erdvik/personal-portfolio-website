
let coockieButton = document.getElementById('coockie-button');

let coockieImg = document.createElement('img');

coockieImg.src = "resources/images/chocolate-chip-cookie-16.jpg"

coockieButton.onclick = function() {

    if (coockieButton.innerText == 'Take Coockie') {
      document.body.appendChild(coockieImg);
      coockieButton.innerText = 'Reject Coockie';
    } else {
      document.body.removeChild(coockieImg);
      coockieButton.innerText = 'Take Coockie';
    }

    
}

let = darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.onclick = function() {

    if (document.body.style.backgroundColor != 'black') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      darkModeButton.innerText = 'White Mode';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      darkModeButton.innerText = 'Dark Mode';
    }
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



