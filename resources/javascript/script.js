
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




