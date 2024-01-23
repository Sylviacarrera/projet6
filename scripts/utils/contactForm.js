export function displayModal(photographerName) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";

    // Ajoute la classe modal-open au body
    document.body.classList.add('modal-open');

    const photographerNameElement = document.getElementById("photographer_name");
    photographerNameElement.textContent = photographerName;

    const form = modal.querySelector('form');
    if (form) {
        form.reset();  // Réinitialise le formulaire
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Vous pouvez traiter les données du formulaire ici si nécessaire

    closeModal();
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    // Retire la classe modal-open du body
    document.body.classList.remove('modal-open');
}