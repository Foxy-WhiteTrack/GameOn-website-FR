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
    // Récupérer le message d'erreur depuis l'attribut data-error
    const errorMessage = firstName.dataset.error;

    // Si le FirstName n'est pas vide et contient plus de 2 car et match avec le regex
    if (firstName.value.match(namesForm) && firstName.value !== ' ' && firstName.value !== null && firstName.value.length >= 2) {
        // alors on n'affiche pas l'erreur et on valide le first
        errorOnFirst = false;
        firstName.setCustomValidity(""); // Réinitialiser le message d'erreur
    } else {
        // on affiche l'erreur et on ne valide pas le first
        errorOnFirst = true;
        firstName.setCustomValidity(errorMessage); // Utiliser le message d'erreur de l'attribut data-error
    }
}




function lastNameCheck() {
    // Récupérer le message d'erreur depuis l'attribut data-error
    const errorMessage = lastName.dataset.error;

    // si le lastName n'est pas vide et contient plus de 2 car et match avec le regex
    if (lastName.value.match(namesForm) && lastName.value !== ' ' && lastName.value !== null && lastName.value.length > 2) {
        // alors on n'affiche pas l'erreur et on valide le last
        errorOnLast = false;
        lastName.setCustomValidity(""); // Réinitialiser le message d'erreur
    } else {
        // on affiche l'erreur et on ne valide pas le last
        errorOnLast = true;
        lastName.setCustomValidity(errorMessage); // Utiliser le message d'erreur de l'attribut data-error
    }
}

function emailCheck() {
    // Récupérer le message d'erreur depuis l'attribut data-error
    const errorMessage = email.dataset.error;

    // si le email match avec la vérification regex et qu'il n'est pas vide
    if (email.value.match(emailForm) && email !== ' ') {
        // alors on n'affiche pas l'erreur et on valide le mail
        errorOnEmail = false;
        email.setCustomValidity(""); // Réinitialiser le message d'erreur
    } else {
        // on affiche l'erreur et on ne valide pas l'email
        errorOnEmail = true;
        email.setCustomValidity(errorMessage); // Utiliser le message d'erreur de l'attribut data-error
    }
}

function birthDateCheck() {
    // Récupérer le message d'erreur depuis l'attribut data-error
    const errorMessage = birthDate.dataset.error;

    // Si la date de naissance match avec la regex et qu'elle n'est pas vide
    if (birthDate.value.match(dateForm) && birthDate.value !== ' ') {
        // alors on n'affiche pas l'erreur
        errorOnBirth = false;
        birthDate.setCustomValidity(""); // Réinitialiser le message d'erreur
    } else {
        // on affiche l'erreur
        errorOnBirth = true;
        birthDate.setCustomValidity(errorMessage); // Utiliser le message d'erreur de l'attribut data-error
    }
}


function qtTournamentCheck() {
    // Récupérer le message d'erreur depuis l'attribut data-error
    const errorMessage = qtTournament.dataset.error;

    // si la quantité tapée match avec la regex et que l'input n'est pas vide et qu'une fois parsée en Int la valeur est supérieur ou égale à 0 (pour qu'elle ne puisse pas être négative)
    if (qtTournament.value.match(nbrForm) && qtTournament.value !== ' ' && parseInt(qtTournament.value) >= 0) {
        // alors on n'affiche pas l'erreur
        errorOnQuantity = false;
        qtTournament.setCustomValidity(""); // Réinitialiser le message d'erreur
    } else {
        // on affiche l'erreur
        errorOnQuantity = true;
        qtTournament.setCustomValidity(errorMessage); // Utiliser le message d'erreur de l'attribut data-error
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
    const errorMessage = conditionsCheckbox.dataset.error;

    if (conditionsCheckbox.checked) {
        // alors on n'affiche pas l'erreur et on valide les conditions
        errorOnConditions = false;
        conditionsCheckbox.setCustomValidity(""); // Réinitialiser le message d'erreur
    } else {
        // on affiche l'erreur et on ne valide pas les conditions
        errorOnConditions = true;
        conditionsCheckbox.setCustomValidity(errorMessage); // Utiliser le message d'erreur de l'attribut data-error
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
