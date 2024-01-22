/*
    Ici, on export les fonctions ^^

*/

export function displayModal(photographerName) {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

    const photographerNameElement = document.getElementById("photographer_name");
    photographerNameElement.textContent = photographerName;
    
    const form = modal.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();  // Empêche le rechargement de la page

    // Vous pouvez traiter les données du formulaire ici si nécessaire

    closeModal();  // Ferme la modale après avoir traité le formulaire
}


export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
