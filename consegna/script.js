/*Creare un carosello funzionante di 5 immagini inserendole dinamicamente con JavaScript.
 Programmare frecce che consentono di scorrere avanti e indietro le varie immagini.

 BONUS 1: Creare un ciclo infinito delle immagini del carosello.
 BONUS 2: Creare delle ''thumbnail'' che raffigurano le immagini.
*/

//Raccolta delle immagini
const carouselAlbum = ['./consegna/img/01.webp', './consegna/img/02.webp', './consegna/img/03.webp', './consegna/img/04.webp', './consegna/img/05.webp']


 //Raccolta elementi dal DOM
 const leftButton = document.getElementById('left');
 const rightButton = document.getElementById('right');
 const gallery = document.getElementById('gallery')
 
//Generazione delle immagini
//for (let i = 0; i < carouselAlbum.length; i++){
   // const game = document.createElement('img')
   // game.src = carouselAlbum[i]
//}

 
 const carouselPics = document.querySelectorAll('#gallery img')


//Creazione della variabile che gestisce il cambio delle foto
let displayedPic = 0;

 //Apparizione nel DOM dell'immagine
carouselPics[displayedPic].classList.add('visible')

 //Funzione delle frecce

 rightButton.addEventListener('click', function () {
carouselPics[displayedPic].classList.remove('visible')

//Incremento dell'indice per cambiare il numero dell'immagine da mostrare a schermo
displayedPic++;
 carouselPics[displayedPic].classList.add('visible')

})


leftButton.addEventListener('click', function () {
    carouselPics[displayedPic].classList.remove('visible')
     
 //Decremento dell'indice
 displayedPic--;
 carouselPics[displayedPic].classList.add('visible')   
    
    })
 