console.log("My profile");

const myFavColor = () => alert('My favorite color is black.');

const myFavPlace = () => alert('My favorite place is my home.');

const myFavRitual = () => alert('My favorite ritual is watching some anime before I go to bed.');

document.querySelector("#color").addEventListener('click', myFavColor);

document.querySelector("#place").addEventListener('click', myFavPlace);

document.querySelector("#ritual").addEventListener('click', myFavRitual);