/*Creare un carosello funzionante di 5 immagini inserendole dinamicamente con JavaScript.
 Programmare frecce che consentono di scorrere avanti e indietro le varie immagini.

 BONUS 1: Creare un ciclo infinito delle immagini del carosello.
 BONUS 2: Creare delle ''thumbnail'' che raffigurano le immagini.
*/

//Raccolta delle immagini



 //Raccolta elementi dal DOM
 const leftButton = document.getElementById('left');
 const rightButton = document.getElementById('right');
 const gallery = document.getElementById('gallery')
 const carouselPics = document.querySelectorAll('#gallery img')


//Creazione della variabile che gestisce il cambio delle foto
let visibilityIndex= 0;
 
//Rendo visibile la prima immagine
carouselPics[visibilityIndex].classList.add('visible')


    
 