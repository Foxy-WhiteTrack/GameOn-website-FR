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

const minAge = 16;
const maxAge = 70;

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

//tableau des erreurs
dataError = {
  empty: "Merci de remplir ce champ",
  name: `Vous devez entrer un prénom valide de minimum 2 caractères`,
  mail: "le format d'email n\'est pas valide",
  birthday: `Vous devez avoir ${minAge} ans minimum et ${maxAge} maximum pour participer`,
  condition: "Vous devez accepter les conditions générales"
}

// #1_Fermer la modal start --------------------------------------------------

// Event ouvrir la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Event fermer la modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeForm));

// ouverture du formulaire
function launchModal() {
  reset();
  if (formIsValidated == false) {
    form.style.display = "block";
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
const locations = document.getElementsByName('location');
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
let errorOnLocation;
let errorOnCondition;

// Fonctions CHECK=
function firstNameCheck() {
  const trimmedFirstName = firstName.value.trim();
  const errorKey = firstName.dataset.errorKey;

  // Si le prénom contient uniquement des espaces, affichez l'erreur et définissez errorOnFirst sur true
  if (trimmedFirstName === "") {
    errorOnFirst = true;
    errDivFirst.innerHTML = dataError.empty;
  } else if (trimmedFirstName.match(namesForm) && trimmedFirstName.length >= 2) {
    errorOnFirst = false;
    errDivFirst.style.display = 'none';
  } else {
    errorOnFirst = true;
    errDivFirst.innerHTML = dataError[errorKey];
  }
  errDivFirst.style.display = errorOnFirst ? 'block' : 'none';
}

function lastNameCheck() {
  const trimmedLastName = lastName.value.trim();

  // Si le nom contient uniquement des espaces, affichez l'erreur et définissez errorOnLast sur true
  if (trimmedLastName === "") {
    errorOnLast = true;
    errDivLast.innerHTML = dataError.empty;
  } else if (trimmedLastName.match(namesForm) && trimmedLastName.length >= 2) {
    errorOnLast = false;
    errDivLast.style.display = 'none';
  } else {
    errorOnLast = true;
    errDivLast.innerHTML = dataError.name;
  }
  errDivLast.style.display = errorOnLast ? 'block' : 'none';
}

function emailCheck() {
  const trimmedEmail = email.value.trim();

  // Si l'email contient uniquement des espaces, affichez l'erreur et définissez errorOnEmail sur true
  if (trimmedEmail === "") {
    errorOnEmail = true;
    errDivEmail.innerHTML = dataError.empty;
  } else if (trimmedEmail.match(emailForm)) {
    errorOnEmail = false;
    errDivEmail.style.display = 'none';
  } else {
    errorOnEmail = true;
    errDivEmail.innerHTML = dataError.mail;
  }
  errDivEmail.style.display = errorOnEmail ? 'block' : 'none';
}

function birthDateCheck() {
  // Si la date de naissance match avec la regex et qu'elle n'est pas vide
  if (birthDate.value.match(dateForm) && birthDate.value.trim() !== '') {
    const birthDateValue = new Date(birthDate.value);
    const currentDate = new Date();
    const ageDifference = currentDate - birthDateValue;
    const age = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

    if (age >= minAge && age <= maxAge) {
      errorOnBirth = false;
      birthDate.setCustomValidity("");
    } else {
      // on affiche l'erreur si l'utilisateur a moins de 16 ans ou plus de 70 ans
      errorOnBirth = true;
      birthDate.setCustomValidity("L'utilisateur doit avoir entre 16 et 70 ans.");
    }
  } else {
    errorOnBirth = true;
    birthDate.setCustomValidity("Date de naissance invalide.");
  }
  // Si errorOnBirth est false alors on applique un display 'none' sur errDivBirth sinon on applique 'block'
  errDivBirth.style.display = !errorOnBirth ? 'none' : 'block';
}


function qtTournamentCheck() {
  errorOnQuantity = false;
  // Si errorOnQuantity est false alors on applique un display 'none' sur errDivQuantity sinon on applique 'block'
  errDivQuantity.style.display = !errorOnQuantity ? 'none' : 'block';

  // si la quantité tapée match avec la regex et que l'input n'est pas vide et qu'une fois parsée en Int la valeur est supérieur ou égale à 0 (pour qu'elle ne puisse pas être négative)
  if (qtTournament.value.match(nbrForm) && qtTournament.value !== ' ' && parseInt(qtTournament.value) >= 0) {
    // alors on n'affiche pas l'erreur
    errDivQuantity.style.display = 'none';
    errorOnQuantity = false;
    // sinon
  } else {
    // on affiche l'erreur
    errorOnQuantity = true;
    errDivQuantity.innerHTML = dataError.empty;
    errDivQuantity.style.display = 'block';
  }
}

// fonction pour vérifier si un des boutton radio est checké
function locationCheck() {
  errorOnLocation = true;
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      errorOnLocation = false;
      break;
    }
  }
  if (errorOnLocation) {
    errDivLocation.innerHTML = "Veuillez choisir un tournoi.";
  } else {
    errDivLocation.style.display = 'none';
  }
  errDivLocation.style.display = errorOnLocation ? 'block' : 'none';

  // Mettre à jour errorOnRadio avec la valeur de errorOnLocation
  errorOnRadio = errorOnLocation;
}

function conditionCheck() {
  // Si la case "conditions" est cochée
  if (conditionsCheckbox.checked) {
    errorOnCondition = false;
    errDivConditions.style.display = 'none';
  } else {
    // Sinon, affichez l'erreur et définissez errorOnCondition sur true
    errorOnCondition = true;
    errDivConditions.innerHTML = dataError.condition;
    errDivConditions.style.display = 'block';
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
  if (errorOnFirst == false && errorOnLast == false && errorOnEmail == false && errorOnBirth == false && errorOnQuantity == false && errorOnRadio == false && errorOnCondition == false && errorOnLocation == false) {
    // ne plus afficher le formulaire et remettre l'affichage en flex
    form.style.display = "none";
    confirmation.style.display = "block";
    validated.style.display = "block";
  }
}

// reset le formulaire
function reset() {
  document.querySelector("#form").reset();
}

// Fonction pour checker les entrées
function check() {
  firstNameCheck();
  lastNameCheck();
  emailCheck();
  birthDateCheck();
  qtTournamentCheck();
  locationCheck()
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