
//MAP


function initMap() {
    var center = [48.8566, 2.3522]; // Exemple : Paris

    var map = L.map('map').setView(center, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

}

document.addEventListener('DOMContentLoaded', initMap);


//MAP


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
    range.setStart(element.firstChild, 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}

document.addEventListener("click", function(event) {
    if (!editableDiv.textContent.trim() && !editableDiv.contains(event.target)) {
        editableDiv.textContent = placeholderText;
        editableDiv.classList.add("placeholder");
    }
});