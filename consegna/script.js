/*Creare un carosello funzionante di 5 immagini inserendole dinamicamente con JavaScript.
 Programmare frecce che consentono di scorrere avanti e indietro le varie immagini.

 BONUS 1: Creare un ciclo infinito delle immagini del carosello.
 BONUS 2: Creare delle ''thumbnail'' che raffigurano le immagini.
*/


// Creazione dell'array delle immagini
const album = ['./consegna/img/01.webp', './consegna/img/02.webp', './consegna/img/03.webp', './consegna/img/04.webp', './consegna/img/05.webp'];
console.log(album);

// Raccolta elementi dal DOM
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const gallery = document.getElementById('gallery');

// Iniezione delle immagini con JS 
for (let i = 0; i < album.length; i++) {
    const src = album[i];
    const gamePic = document.createElement('img');
    gamePic.src = src;
    gamePic.alt = `game-${i + 1}`;
    gamePic.classList.add('item'); // Aggiung la classe 'item' a ogni immagine
    gallery.appendChild(gamePic);

    console.log(gamePic);
}

// Seleziona tutte le immagini con la classe 'item'
const carouselPics = document.querySelectorAll('.item');

// Creazione della variabile che gestisce il cambio delle foto
let visibilityIndex = 0;

// Rendo visibile la prima immagine
carouselPics[visibilityIndex].classList.add('visible');

console.log(carouselPics);
//Eventi della freccia destra
rightButton.addEventListener('click', function (){
carouselPics[visibilityIndex].classList.remove('visible') //Rimuovo la classe della visibilità a qualunque elemento la abbia
visibilityIndex++; //Aumento l'indice di visibilità per rendere visibile la foto successiva
if (visibilityIndex === carouselPics.length){       //Loop che rimanda l'indice da 5 a 0
   visibilityIndex = 0;
}
carouselPics[visibilityIndex].classList.add('visible') //Aggiungo la classe alla foto successiva.


})


//Eventi della freccia sinsitra
leftButton.addEventListener('click', function (){
   carouselPics[visibilityIndex].classList.remove('visible') //Rimuovo la classe della visibilità a qualunque elemento la abbia
   visibilityIndex--; //Decremento l'indice di visibilità per rendere visibile la foto precedente
   if (visibilityIndex < 0){       
      visibilityIndex = carouselPics.length - 1; 
   }
   carouselPics[visibilityIndex].classList.add('visible')
   })
   


    
 