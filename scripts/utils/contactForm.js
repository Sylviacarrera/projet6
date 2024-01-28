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

    // Récupère les données du formulaire
    const form = event.target;
    const formData = new FormData(form);

    // Crée un objet pour stocker les données du formulaire
    let formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Affiche les données du formulaire dans la console
    console.log(formDataObject);
    // Vous pouvez traiter les données du formulaire ici si nécessaire

    closeModal();
}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    // Retire la classe modal-open du body
    document.body.classList.remove('modal-open');
}
