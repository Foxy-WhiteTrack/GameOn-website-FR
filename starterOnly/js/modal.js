// DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const signUpBtn = document.querySelector("close");
const closeBtn = document.querySelectorAll(".close");
const content = document.querySelector(".content");
const popup = document.querySelector(".popUp");

// Fonctions
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Event ouvrir la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Event fermer la modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeForm));

// ouverture du formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture du formulaire
function closeForm() {
  modalbg.style.display = "none";
}


