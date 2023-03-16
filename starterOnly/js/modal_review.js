// DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const signUpBtn = document.querySelector("close");
const closeBtn = document.querySelectorAll(".close");
const content = document.querySelector(".content");
const popup = document.querySelector(".popUp");

let errorExist = true;

// Fonctions
function editNav() {
  let x = document.getElementById("myTopnav");
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
  modalbg.style.display = "block";
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
const mail = document.querySelector("#email");
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
const errDivValid = document.querySelector("#error-valid");

// REGEX
const namesForm = /^([a-zA-Z-ç-é-è-ê\s])+$/;
const emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const dateForm = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const nbrForm = /^[0-9]+$/;

// Fonction pour checker les entrées
function check() {
  let errorOnFirst;
  let errorOnLast;
  let errorOnMail;
  let errorOnBirth;
  let errorOnQuantity;
  let errorOnRadio;
  let errorOnCondition;

  // si le FirstName n'est pas vide et contient plus de 2 car et match avec le regex
  if (firstName.value.match(namesForm) && firstName.value !== ' ' && firstName.value !== null && firstName.value.length > 2) {
    // alors on n'affiche pas l'erreur et on valide le first
    errDivFirst.style.display = 'none';
    errorOnFirst = false;
    // sinon
  } else {
    // alors on affiche l'erreur et on ne valide pas le first
    errDivFirst.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ Prénom.';
    errDivFirst.style.color = 'red';
    errDivFirst.style.fontSize = '16px';
    errorOnFirst = true;
  };
  // si le lasttName n'est pas vide et contient plus de 2 car et match avec le regex
  if (lastName.value.match(namesForm) && lastName.value !== ' ' && lastName.value !== null && lastName.value.length > 2) {
    // alors on n'affiche pas l'erreur et on valide le last
    errDivLast.style.display = 'none';
    errorOnLast = false;
    // sinon
  } else {
    // alors on affiche l'erreur et on ne valide pas le first
    errDivLast.innerText = 'Veuillez entrer 2 caractères ou plus pour le champ Nom.';
    errDivLast.style.color = 'red';
    errDivLast.style.fontSize = '16px';
    errorOnLast = true;
  };
  // si le mail match avec la vérification regex et qu'il n'est pas vide 
  if (mail.value.match(emailForm) && mail !== ' ') {
    // alors on n'affiche pas l'erreur et on valide le mail
    errDivEmail.style.display = 'none';
    errorOnMail = false;
    // sinon
  } else {
    // on affiche l'erreur et on ne valide pas le mail
    errDivEmail.innerText = 'Veuillez renseigner une addresse mail valide';
    errDivEmail.style.color = 'red';
    errDivEmail.style.fontSize = '16px';
    errorOnMail = true;
  };
}

// Fonction pour valider les entrées
function validation() {

  const firstName = document.querySelector("#first");
  const lastName = document.querySelector("#last");
  const mail = document.querySelector("#email");

  const form = new Form({ firstName: new FirstNameFormField(firstName), lastName: new LastNameFormField(lastName), email })
  const fields = form.validate();
  fields.forEach(({ hasError, id, errorMessage }) => {
    const element = document.querySelector(`#error-${id}`);
    if (hasError()) {
      element.innerText = errorMessage;
      element.className('error')
    } else {
      element.style.display = 'none';
    }

  })
  if (result.isValid()) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  }
}


class FirstName {
  regexPattern = /^([a-zA-Z-ç-é-è-ê\s])+$/;
  minimumChar = 2;
  constructor(firstName) {
    this.value = firstName;
  }
  isValid() {
    return this.value.match(this.regexPattern) && this.value !== ' ' && this.value !== null && this.value.length > this.minimumChar
  }
}

class LastName {
  regexPattern = /^([a-zA-Z-ç-é-è-ê\s])+$/;
  minimumChar = 2;
  constructor(lastName) {
    this.value = lastName;
  }
  isValid() {
    return this.value.match(this.regexPattern) && this.value !== ' ' && this.value !== null && this.value.length > this.minimumChar
  }
}

class Email {
  emailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  constructor(email) {
    this.value = email.trim();
  }
  isNotEmpty() {
    this.email !== ''
  }
  validateRegex() {
    this.email.value.match(this.emailForm);
  }
  isValid() {
    return this.validateRegex() && this.isNotEmpty()
  }
}

class Form {
  constructor(fields) {
  }
  isValid() {
    // every verifie si tous les champs remplissent une condition (ici s'ils sont valides)
    return fields.every(field => field.isValid());
  }
}

// S'il n'y a aucune erreur alors
// if (errorFirst == false && errorOnLast == false && errorOnMail == false && errorOnBirth == false && errorOnQuantity == false && errorOnRadio == false && errorOnCondition == false) {

//   // ne plus afficher le formulaire et remettre l'affichage en flex
//   form.style.display = "none";
//   confirmation.style.display = "flex";
// }
//}
// Fonction pour afficher une erreur
function error() {

}
// #3_Validation ou message d'erreur end ---------------------------------------
