export function displayModal(photographerName) {
    const modal = document.getElementById("contact_modal");
    const overlay = document.getElementById("overlay");

    // Affiche la modal et l'overlay
    modal.style.display = "block";
    overlay.style.display = "block";

    // Ajoute la classe modal-open au body
    document.body.classList.add('modal-open');

    const photographerNameElement = document.getElementById("photographer_name");
    photographerNameElement.textContent = photographerName;

    // Focus sur le premier élément focusable dans le formulaire
    const firstFocusableElement = modal.querySelector('input:not([type="hidden"]), select, textarea, button');
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }

    const form = modal.querySelector('form');
    if (form) {
        // Réinitialise le formulaire
        form.reset();  
        // Ajoute des écouteurs d'événements pour le formulaire
        form.addEventListener('submit', handleFormSubmit);                  
        form.addEventListener('keydown', handleFormKeydown);
    }

    const closeModalButton = document.getElementById("closeModal");

    // Assurez-vous que l'élément de fermeture est focusable avec tabindex
    if (closeModalButton) {
        closeModalButton.tabIndex = 0;
    }
}

function handleFormSubmit(event) {
    // Empêche la soumission normale du formulaire
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

    // Ferme la modal après la soumission
    closeModal();
}

function handleFormKeydown(event) {
    // Gère la navigation avec Tab et Shift + Tab dans le formulaire
    if (event.code === 'Tab') {
        const focusableElements = Array.from(this.querySelectorAll('input:not([type="hidden"]), select, textarea, button'));
        const currentIndex = focusableElements.indexOf(document.activeElement);

        if (event.shiftKey) {
            // Shift + Tab
            if (currentIndex > 0) {
                focusableElements[currentIndex - 1].focus();
                event.preventDefault();
            }
        } else {
            // Tab
            if (currentIndex < focusableElements.length - 1) {
                focusableElements[currentIndex + 1].focus();
                event.preventDefault();
            }
        }
                        
    } else if (event.code === 'Escape') {
        // Ferme la modal si la touche "Échap" est pressée
        closeModal();
    }


}

export function closeModal() {
    const modal = document.getElementById("contact_modal");
    const overlay = document.getElementById("overlay");

    // Masque la modal et l'overlay
    modal.style.display = "none";
    overlay.style.display = "none";

    // Retire la classe modal-open du body
    document.body.classList.remove('modal-open');

    let scrollPosition;
    // Rétablit la position de défilement à la fermeture de la modale
    window.scrollTo(0, scrollPosition);

    
}
