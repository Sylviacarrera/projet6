
export function displayModal(photographerName) {
    const modal = document.getElementById("contact_modal");
    const overlay = document.getElementById("overlay");

    modal.style.display = "block";
    overlay.style.display = "block";

     // Ajoute la classe modal-open au body
     document.body.classList.add('modal-open');

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
        form.reset();  // Réinitialise le formulaire
        form.addEventListener('submit', handleFormSubmit);                  
        form.addEventListener('keydown', handleFormKeydown);
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
    }
    

    // Ajoutez ici d'autres logiques de gestion des touches clavier si nécessaire
}


export function closeModal() {
    const modal = document.getElementById("contact_modal");
    const overlay = document.getElementById("overlay");

    // Retient la position de défilement actuelle
    const scrollPosition = window.scrollY;

    modal.style.display = "none";
    overlay.style.display = "none";

    // Retire la classe modal-open du body
    document.body.classList.remove('modal-open');

    // Rétablit la position de défilement à la fermeture de la modale
    window.scrollTo(0, scrollPosition);
    
}