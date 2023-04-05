const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const inscript = document.querySelector("#btn-inscript");
const content = document.querySelector(".content");

// boutons fermeture
const closed = document.querySelector("#closed");

const confirmation = document.querySelector('.confirmation');
const validated = document.querySelector('#validated');
// variables des ages
const minAge = 16;
const maxAge = 70;

let formIsValidated = false;

// fonction d'édition des classe pour la topNav
function editNav() {
  var x = document.getElementById("myTopnav");
  // si la classe est topnav alors ajouter la classe responsive sinon laisser la classe topnav
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//tableau des erreurs dédiée
dataError = {
  empty: 'Merci de remplir ce champ',
  name: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom',
  last: 'Veuillez entrer 2 caractères ou plus pour le champ du nom',
  mail: 'le format d\'email n\'est pas valide',
  quantity: 'cette valeur doit être supérieur ou égale à 0',
  birthday: `Vous devez avoir ${minAge} ans minimum et ${maxAge} maximum pour participer`,
  errorbirthday: 'Vous devez entrer votre date de naissance.',
  location: 'Vous devez choisir une option.',
  condition: 'Vous devez vérifier que vous acceptez les termes et conditions.'
}

// ouvrir le panel au clic du bouton ouverture du formulaire (je m'inscris)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fermer le panel au clic du bouton fermeture du formulaire
closeBtn.forEach((btn) => btn.addEventListener("click", closeForm));

// fermer le panel au clic du bouton fermeture
closed.addEventListener("click", closeThx);

// fonction ouverture du formulaire
function launchModal() {
  // effectuer un reset au lancement
  reset();
  // si le formulaire n'est pas validé, afficher le formulaire, le contenu et la modal mais pas le message de validation
  if (formIsValidated == false) {
    form.style.display = "block";
    modalbg.style.display = "block";
    validated.style.display = "none";
    content.style.display = "block";
  }
}

// fonction de fermeture du formulaire
function closeForm() {
  modalbg.style.display = "none";
}
// fonction pour fermeture panel remerciement
function closeThx() {
  validated.style.display = "none";
  content.style.display = "none";
  modalbg.style.display = "none";
  reset();
}

// Variables éléments formulaire
const form = document.querySelector("#form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const qtTournament = document.querySelector("#quantity");

// Variables locations formulaire
const locations = document.getElementsByName('location');
const radioButtons = document.querySelectorAll('input[type="radio"][name="location"]');
const conditionsCheckbox = document.querySelector('#conditions');
const newsletterCheckbox = document.querySelector('#newsletter');

// Variables pour error
const errDivFirst = document.querySelector("#error-first");
const errDivLast = document.querySelector("#error-last");
const errDivEmail = document.querySelector("#error-email");
const errDivBirth = document.querySelector("#error-birth");
const errDivQuantity = document.querySelector("#error-quantity");
const errDivLocation = document.querySelector("#error-location");

const errDivConditions = document.querySelector("#error-conditions");

// les REGEX
const date = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const nbr = /^[0-9]+$/;

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

// fonction pour checker le prénom
function firstNameCheck() {
  //// effectuer la fonction trim() donc supprimer les espaces
  const trimmedFirstName = firstName.value.trim();
  const errorKey = firstName.dataset.errorKey;

  // Si le prénom est vide afficher l'erreur dédiée
  if (trimmedFirstName === "") {
    errorOnFirst = true;
    errDivFirst.innerHTML = dataError.empty;
    // si l'entrée match et qu'elle est d'au moin 2 caractères alors ne pas mettre d'erreur
  } else if (trimmedFirstName.match(namesForm) && trimmedFirstName.length >= 2) {
    errorOnFirst = false;
    errDivFirst.style.display = 'none';
    // sinon afficher l'erreur dédiée
  } else {
    errorOnFirst = true;
    errDivFirst.innerHTML = dataError[errorKey];
  }
  // afficher ou pas l'erreur selon la variable errorOnFirst
  errDivFirst.style.display = errorOnFirst ? 'block' : 'none';
}

// fonction pour checker le nom
function lastNameCheck() {
  // effectuer la fonction trim() donc supprimer les espaces
  const trimmedLastName = lastName.value.trim();

  // Si le nom contient uniquement des espaces, affichez l'erreur
  if (trimmedLastName === "") {
    errorOnLast = true;
    errDivLast.innerHTML = dataError.empty;
    // si l'entrée match et est plus grand ou égale à 2 alors ne pas mettre d'erreur
  } else if (trimmedLastName.match(namesForm) && trimmedLastName.length >= 2) {
    errorOnLast = false;
    errDivLast.style.display = 'none';
    // sinon mettre l'erreur dédiée
  } else {
    errorOnLast = true;
    errDivLast.innerHTML = dataError.last;
  }
  // afficher ou pas l'erreur selon la variable errorOnLast
  errDivLast.style.display = errorOnLast ? 'block' : 'none';
}

// fonction pour checker l'email
function emailCheck() {
  // effectuer la fonction trim() donc supprimer les espaces
  const trimmedEmail = email.value.trim();

  // Si l'email contient uniquement des espaces, affichez l'erreur et définissez errorOnEmail sur true
  if (trimmedEmail === "") {
    errorOnEmail = true;
    errDivEmail.innerHTML = dataError.empty;
    // si l'entrée match avec la regex ne pas mettre d'erreur sinon mettre l'erreur dédiée  
  } else if (trimmedEmail.match(emailForm)) {
    errorOnEmail = false;
    errDivEmail.style.display = 'none';
  } else {
    errorOnEmail = true;
    errDivEmail.innerHTML = dataError.mail;
  }
  // supprimer ou afficher l'erreur selon la valeur de errorOnEmail
  errDivEmail.style.display = errorOnEmail ? 'block' : 'none';
}

// fonction pour vérifier la date de naissance
function birthDateCheck() {
  // Si la date de naissance match avec la regex et qu'elle n'est pas vide ou pleine d'espace 
  if (birthDate.value.match(dateForm) && birthDate.value.trim() !== '') {
    const birthDateValue = new Date(birthDate.value);
    const currentDate = new Date();
    const ageDifference = currentDate - birthDateValue;
    const age = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

    // et si l'age est bien entre 16 et 70 ans ne pas mettre d'erreur
    if (age >= minAge && age <= maxAge) {
      errorOnBirth = false;
    } else {
      // sinon on affiche l'erreur (si l'utilisateur a moins de 16 ans ou plus de 70 ans)
      errorOnBirth = true;
      errDivBirth.innerHTML = dataError.birthday;
    }
    // sinon (si la date de naissance ne match pas alors on affiche l'erreur dédiée)
  } else {
    errorOnBirth = true;
    errDivBirth.innerHTML = dataError.errorbirthday;
  }
  // Si errorOnBirth est false alors on applique un display 'none' sur errDivBirth sinon on applique 'block'
  errDivBirth.style.display = !errorOnBirth ? 'none' : 'block';
}

// fonction pour vérifier la quantité des tournois
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
    errDivQuantity.innerHTML = dataError.quantity;
    errDivQuantity.style.display = 'block';
  }
}

// fonction pour vérifier si un des boutton radio est checké
function locationCheck() {
  errorOnLocation = true;
  // boucle sur tous les bouttons radio location
  for (let i = 0; i < locations.length; i++) {
    // Si un est checké, alors il n'y a pas d'erreur
    if (locations[i].checked) {
      errorOnLocation = false;
      break;
    }
  }
  // Si l'erreur est sur true afficher l'erreur sinon ne pas l'afficher
  if (errorOnLocation) {
    errDivLocation.innerHTML = dataError.location;
  } else {
    errDivLocation.style.display = 'none';
  }
  // afficher le display qui corresponds selon la variable errorOnLocation
  errDivLocation.style.display = errorOnLocation ? 'block' : 'none';

  // Mettre à jour errorOnRadio avec la valeur de errorOnLocation
  errorOnRadio = errorOnLocation;
}

// fonction pour vérifier les condition d'utilisation
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

// --------------------- validation complète du formulaire ---------------------
// Fonction pour valider les entrées
function validation() {
  // S'il n'y a aucune erreur alors
  if (errorOnFirst == false && errorOnLast == false && errorOnEmail == false && errorOnBirth == false && errorOnQuantity == false && errorOnRadio == false && errorOnCondition == false && errorOnLocation == false) {
    // ne plus afficher le formulaire et remettre l'affichage en flex
    form.style.display = "none";
    confirmation.style.display = "block";
    validated.style.display = "flex";
  }
}

// reset le formulaire
function reset() {
  document.querySelector("#form").reset();
  errorOnFirst = true;
  errorOnLast = true;
  errorOnEmail = true;
  errorOnBirth = true;
  errorOnQuantity = true;
  errorOnRadio = true;
  errorOnLocation = true;
  errorOnCondition = true;
}

// Fonction pour lancer les fonction qui vont checker toutes les entrées
function check() {
  firstNameCheck();
  lastNameCheck();
  emailCheck();
  birthDateCheck();
  qtTournamentCheck();
  locationCheck()
  conditionCheck();

  validation();
}

// écouter le bouton submit et lancer la fonction check au clic
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire
  check(); // Vérifie les entrées du formulaire
});