// DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const signUpBtn = document.querySelector(".close");
const closeBtn = document.querySelectorAll(".close");
const content = document.querySelector(".content");
const popup = document.querySelector(".popUp");
const modalBody = document.querySelector(".modal-body");

const confirmation = document.querySelector('.confirmation');
const validated = document.querySelector('#validated');

let errorExist = true;
let formIsValidated = false;

// Fonctions
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// #1_Fermer la modal start --------------------------------------------------

// Event ouvrir la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Event fermer la modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeForm));

// ouverture du formulaire
function launchModal() {
  if (formIsValidated == false) {
    modalbg.style.display = "block";
    validated.style.display = "none";
  }
}

// fermeture du formulaire
function closeForm() {
  modalbg.style.display = "none";
}
// #1_Fermer la modal end -----------------------------------------------------

// #2_Implémenter les entrées start -------------------------------------------
// Variables éléments formulaire
const form = document.querySelector("#form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const qtTournament = document.querySelector("#quantity");

// RegExs
const date = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const nbr = /^[0-9]+$/;

// Variables locations formulaire
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const radioButtons = document.querySelectorAll('input[type="radio"][name="location"]');
const conditionsCheckbox = document.querySelector('#conditions');
const newsletterCheckbox = document.querySelector('#newsletter');

// #2_Implémenter les entrées end ----------------------------------------------

// #3_Validation ou message d'erreur start -------------------------------------
// Variables pour validations

// Variables pour error
const errDivFirst = document.querySelector("#error-first");
const errDivLast = document.querySelector("#error-last");
const errDivEmail = document.querySelector("#error-email");
const errDivBirth = document.querySelector("#error-birth");
const errDivQuantity = document.querySelector("#error-quantity");
const errDivLocation = document.querySelector("#error-location");

const errDivConditions = document.querySelector("#error-conditions");

// REGEX
const namesForm = /^([a-zA-Z-ç-é-è-ê\s])+$/;
const emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const dateForm = /^\d{4}[./-]\d{2}[./-]\d{2}$/;
const nbrForm = /^[0-9]+$/;

// Variables globales d'erreurs
let errorOnFirst;
let errorOnLast;
let errorOnEmail;
let errorOnBirth;
let errorOnQuantity;
let errorOnRadio;
let errorOnCondition;

// Fonctions CHECK=
function fisrtNameCheck() {

  // Si errorOnFirst est false alors on applique un display 'none' sur errDivFirst sinon on applique 'block'
  errDivFirst.style.display = !errorOnFirst ? 'none' : 'block';

  // si le FirstName n'est pas vide et contient plus de 2 car et match avec le regex
  if (firstName.value.match(namesForm) && firstName.value !== ' ' && firstName.value !== null && firstName.value.length >= 2) {
    // alors on n'affiche pas l'erreur et on valide le first
    errorOnFirst = false;
  } else {
    // on affiche l'erreur et on ne valide pas le first
    errDivFirst.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ Prénom.';
    errorOnFirst = true;
  }
}


function lastNameCheck() {

  // alors on affiche l'erreur et on ne valide pas le first
  errDivLast.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ Nom.';
  errorOnLast = true;

  // Si errorOnLast est false alors on applique un display 'none' sur errDivLast sinon on applique 'block'
  errDivLast.style.display = !errorOnLast ? 'none' : 'block';

  // si le lasttName n'est pas vide et contient plus de 2 car et match avec le regex
  if (lastName.value.match(namesForm) && lastName.value !== ' ' && lastName.value !== null && lastName.value.length > 2) {
    // alors on n'affiche pas l'erreur et on valide le last
    errDivLast.style.display = 'none';
    errorOnLast = false;
    // sinon
  }
}

function emailCheck() {

  // on affiche l'erreur et on ne valide pas l'email
  errDivEmail.innerText = 'Veuillez renseigner une addresse email valide';
  errorOnEmail = true;
  // Si errorOnEmail est false alors on applique un display 'none' sur errDivEmail sinon on applique 'block'
  errDivEmail.style.display = !errorOnEmail ? 'none' : 'block';

  // si le email match avec la vérification regex et qu'il n'est pas vide 
  if (email.value.match(emailForm) && email !== ' ') {
    // alors on n'affiche pas l'erreur et on valide le mail
    errDivEmail.style.display = 'none';
    errorOnEmail = false;
    // sinon
  }
}

function birthDateCheck() {

  // Si errorOnBirth est false alors on applique un display 'none' sur errDivBirth sinon on applique 'block'
  errDivBirth.style.display = !errorOnBirth ? 'none' : 'block';

  // Si la date de naissance match avec la regex et qu'elle n'est pas vide
  if (birthDate.value.match(dateForm) && birthDate.value !== ' ') {
    // alors on n'affiche pas l'erreur
    errDivBirth.style.display = 'none';
    errorOnBirth = false;
  } else {
    // on affiche l'erreur
    errDivBirth.innerText = 'Veuillez entrer une date de naissance valide.';
    errorOnBirth = true;
  }
}


function qtTournamentCheck() {

  // on affiche l'erreur
  errDivQuantity.innerText = 'Veuillez entrer un nombre de tournois valide (0 ou plus).';

  errorOnQuantity = true;
  // Si errorOnQuantity est false alors on applique un display 'none' sur errDivQuantity sinon on applique 'block'
  errDivQuantity.style.display = !errorOnQuantity ? 'none' : 'block';

  // si la quantité tapée match avec la regex et que l'input n'est pas vide et qu'une fois parsée en Int la valeur est supérieur ou égale à 0 (pour qu'elle ne puisse pas être négative)
  if (qtTournament.value.match(nbrForm) && qtTournament.value !== ' ' && parseInt(qtTournament.value) >= 0) {
    // alors on n'affiche pas l'erreur
    errDivQuantity.style.display = 'none';
    errorOnQuantity = false;
    // sinon
  }
}

// fonction pour vérifier si un des boutton radio est checké
function checkRadioButtons() {
  // initialiser un booléen sur false
  let isChecked = false;
  // boucler sur un forEach qui vérifie
  radioButtons.forEach((radio) => {
    // si le boutton est coché
    if (radio.checked) {
      // la variable passe à true
      isChecked = true;
    }
  });
  return isChecked;
}

function conditionCheck() {

  // on affiche l'erreur
  errDivConditions.innerText = 'Veuillez accepter les conditions d\'utilisation.';
  errorOnCondition = true;

  // Si errorOnCondition est false alors on applique un display 'none' sur errDivConditions sinon on applique 'block'
  errDivConditions.style.display = !errorOnCondition ? 'none' : 'block';

  //si le checkbox des condition est coché
  if (conditionsCheckbox.checked) {
    // alors on n'affiche pas l'erreur
    errDivConditions.style.display = 'none';
    errorOnCondition = false;
    // sinon
  }
}

function checkboxCheck() {
  if (newsletterCheckbox.checked) {
    // Ici, vous pouvez ajouter des actions à effectuer si la case est cochée
    // back end => Envoyer le mail dans la mail list 
    console.log("Inscrit à la newsletter");
  }
}


// --------------------- validation ---------------------
// Fonction pour valider les entrées
function validation() {
  // S'il n'y a aucune erreur alors
  if (errorOnFirst == false && errorOnLast == false && errorOnEmail == false && errorOnBirth == false && errorOnQuantity == false && errorOnRadio == false && errorOnCondition == false) {
    // ne plus afficher le formulaire et remettre l'affichage en flex
    form.style.display = "none";
    confirmation.style.display = "block";
    validated.style.display = "block";
    modalBody.style.display = "none";
    formIsValidated = true;
  }
}

// Fonction pour checker les entrées
function check() {
  fisrtNameCheck();
  lastNameCheck();
  emailCheck();
  birthDateCheck();
  qtTournamentCheck();
  errorOnRadio = !checkRadioButtons(); // Modifier cette ligne
  conditionCheck();
  checkboxCheck();

  validation();
}

// #3_Validation ou message d'erreur end ---------------------------------------

// 4#_Ajout confirmation quand envoi réussi start ------------------------------
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire
  check(); // Vérifie les entrées du formulaire
});
// 4#_Ajout confirmation quand envoi réussi end ---------------------------------
