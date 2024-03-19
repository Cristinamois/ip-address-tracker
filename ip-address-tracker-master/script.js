
// //MAP


// // function initMap() {
// //     var center = [48.8566, 2.3522]; // Exemple : Paris

// //     var map = L.map('map').setView(center, 12);

// //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //         attribution: '© OpenStreetMap contributors'
// //     }).addTo(map);

// // }

// document.addEventListener('DOMContentLoaded', initMap);


// //MAP


// var editableDiv = document.getElementById("editableDiv");
// var placeholderText = "Search for any IP address or domain";

// // Événement de clic sur la boîte éditable
// editableDiv.addEventListener("click", function() {
//     if (editableDiv.textContent.trim() === placeholderText) {
//         editableDiv.textContent = "";
//         editableDiv.classList.remove("placeholder");
//     }
//     placeCursorAtStart(editableDiv);
// });

// // Événement de blur (perte de focus) sur la boîte éditable
// editableDiv.addEventListener("blur", function() {
//     if (editableDiv.textContent.trim() === "") {
//         editableDiv.textContent = placeholderText;
//         editableDiv.classList.add("placeholder");
//     }
// });

// // Événement de saisie de texte dans la boîte éditable
// editableDiv.addEventListener("input", function() {
//     if (editableDiv.textContent.trim() === placeholderText) {
//         editableDiv.classList.remove("placeholder");
//     } else {
//         editableDiv.classList.add("placeholder");
//     }
// });

// // Fonction pour placer le curseur au début du texte dans une boîte éditable
// function placeCursorAtStart(element) {
//     var range = document.createRange();
//     var selection = window.getSelection();
//     range.setStart(element.firstChild, 0);
//     range.collapse(true);
//     selection.removeAllRanges();
//     selection.addRange(range);
// }

// document.addEventListener("click", function(event) {
//     if (!editableDiv.textContent.trim() && !editableDiv.contains(event.target)) {
//         editableDiv.textContent = placeholderText;
//         editableDiv.classList.add("placeholder");
//     }
// });


// var editableDiv = document.getElementById("editableDiv");

// // document.addEventListener("click", function(event) {
// //     if (editableDiv.textContent.trim() !== "") {
// //         // Si du texte est entré dans la boîte et que l'utilisateur clique en dehors de la boîte, procédez à la géolocalisation
// //         var ipAddress = editableDiv.textContent.trim(); // Récupérer l'adresse IP entrée par l'utilisateur
// //         getLocation(ipAddress); // Appeler la fonction pour placer un marqueur sur la carte
// //     }
// // });

// editableDiv.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault(); // Empêche le comportement par défaut du navigateur lorsqu'on appuie sur "Entrée"
//         if (editableDiv.textContent.trim() !== "") {
//             var ipAddress = editableDiv.textContent.trim(); // Récupérer l'adresse IP entrée par l'utilisateur
//             getLocation(ipAddress); // Appeler la fonction pour placer un marqueur sur la carte
//         }
//     }
// });

// function getLocation(ipAddress) {
//     // Ici, vous devez appeler votre service de géolocalisation IP pour obtenir les coordonnées géographiques correspondant à l'adresse IP
//     // Pour cet exemple, je vais placer un marqueur à une position fixe
//     var latitude = 51.5; // Latitude de l'emplacement fictif associé à l'adresse IP
//     var longitude = -0.09; // Longitude de l'emplacement fictif associé à l'adresse IP
//     addMarker(latitude, longitude); // Appeler la fonction pour placer un marqueur sur la carte
// }

// function addMarker(latitude, longitude) {
//     // Créer un marqueur à partir des coordonnées fournies
//     var marker = L.marker([latitude, longitude]).addTo(map);
// }




















var map; // Déclarer la variable map à l'extérieur de la fonction initMap()

function initMap() {
    var center = [48.8566, 2.3522]; // Exemple : Paris

    // Initialiser la carte uniquement si elle n'est pas déjà initialisée
    if (!map) {
        map = L.map('map').setView(center, 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    }
}

document.addEventListener('DOMContentLoaded', initMap);

var editableDiv = document.getElementById("editableDiv");
var placeholderText = "Search for any IP address or domain";

// Événement de clic sur la boîte éditable
editableDiv.addEventListener("click", function() {
    if (editableDiv.textContent.trim() === placeholderText) {
        editableDiv.textContent = "";
        editableDiv.classList.remove("placeholder");
    }
    placeCursorAtStart(editableDiv);
});

// Événement de blur (perte de focus) sur la boîte éditable
editableDiv.addEventListener("blur", function() {
    if (editableDiv.textContent.trim() === "") {
        editableDiv.textContent = placeholderText;
        editableDiv.classList.add("placeholder");
    }
});

// Événement de saisie de texte dans la boîte éditable
editableDiv.addEventListener("input", function() {
    if (editableDiv.textContent.trim() === placeholderText) {
        editableDiv.classList.remove("placeholder");
    } else {
        editableDiv.classList.add("placeholder");
    }
});

// Fonction pour placer le curseur au début du texte dans une boîte éditable
function placeCursorAtStart(element) {
    var range = document.createRange();
    var selection = window.getSelection();
    
    // Vérifier s'il y a un enfant (noeud texte) dans la boîte éditable
    if (element.firstChild) {
        range.setStart(element.firstChild, 0);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

document.addEventListener("click", function(event) {
    if (!editableDiv.textContent.trim() && !editableDiv.contains(event.target)) {
        editableDiv.textContent = placeholderText;
        editableDiv.classList.add("placeholder");
    }
});

var editableDiv = document.getElementById("editableDiv");

editableDiv.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut du navigateur lorsqu'on appuie sur "Entrée"
        if (editableDiv.textContent.trim() !== "") {
            var ipAddress = editableDiv.textContent.trim(); // Récupérer l'adresse IP entrée par l'utilisateur
            getLocation(ipAddress); // Appeler la fonction pour placer un marqueur sur la carte
        }
    }
});

editableDiv.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        console.log("Touche Entrée pressée");
        event.preventDefault(); // Empêche le comportement par défaut du navigateur lorsqu'on appuie sur "Entrée"
        if (editableDiv.textContent.trim() !== "") {
            var ipAddress = editableDiv.textContent.trim(); // Récupérer l'adresse IP entrée par l'utilisateur
            console.log("Adresse IP entrée :", ipAddress); // Vérifier l'adresse IP saisie
            getLocation(ipAddress); // Appeler la fonction pour placer un marqueur sur la carte
        } else {
            console.log("Aucune adresse IP saisie");
        }
    }
});

function getLocation(ipAddress) {
    // Ici, vous devez appeler votre service de géolocalisation IP pour obtenir les coordonnées géographiques correspondant à l'adresse IP
    // Pour cet exemple, je vais placer un marqueur à une position fixe
    var latitude = 51.5; // Latitude de l'emplacement fictif associé à l'adresse IP
    var longitude = -0.09; // Longitude de l'emplacement fictif associé à l'adresse IP
    addMarker(latitude, longitude); // Appeler la fonction pour placer un marqueur sur la carte
}

function addMarker(latitude, longitude) {
    // Assurez-vous que la carte est initialisée avant d'ajouter un marqueur
    if (map) {
        // Créer un marqueur à partir des coordonnées fournies
        var marker = L.marker([latitude, longitude]).addTo(map);
    }
}