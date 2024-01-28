let currentMedia; // cette variable va permettre de garder en memoire le media a affiche

// cette fonction est pour ouvrir la lightbox, elle appelle aussi la fonction pour afficher l'image ou la vidéo dedans
export function displayLightBox(media) {
    const modal = document.getElementById("lightBox");
    modal.style.display = "block";
    displayMedia(media);
    // Ajoutez le focus au container de la lightbox pour permettre la navigation au clavier
    const lightboxContainer = document.getElementById("lightBox");
    lightboxContainer.setAttribute('tabindex', '0');
    lightboxContainer.focus();

    // Ajoutez des événements pour gérer les touches du clavier
    lightboxContainer.addEventListener('keydown', handleLightboxKeydown);
}


// pour fermer la lightbox
export function closeLightbox() {
    const modal = document.getElementById("lightBox");
    modal.style.display = "none";
}

// cette fonction va afficher l'image ou la vidéo
export function displayMedia(media) {
    currentMedia = media; // je resset currentMedia, car j'ai besoin de garder en memoire l'exact media sur lequel on est
    const mediaContainer = document.getElementById("mediaContainerlightbox");
    mediaContainer.innerHTML = "";

    if (currentMedia.image) {
        const image = document.createElement('img');
        image.src =  `./assets/medias/${currentMedia.image}`;
        mediaContainer.appendChild(image);
    }

    if (currentMedia.video) {
        const video = document.createElement("video");
        video.controls = true;
        const source = document.createElement('source');
        source.src =  `./assets/medias/${currentMedia.video}`;
        video.appendChild(source);
        mediaContainer.appendChild(video);
    }

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    textContainer.textContent = currentMedia.title; // Remplacez avec le texte souhaité
    mediaContainer.appendChild(textContainer);
}

// fonction qui va afficher le media suivant
export function displayNextMedia(mediaArray) {
    const index = mediaArray.findIndex(media => media.id === currentMedia.id);
    currentMedia = mediaArray[(index + 1) % mediaArray.length]; // Utilisation de la boucle infinie
    displayMedia(currentMedia);
}

// fonction qui va afficher le media precedent
export function displayPreviousMedia(mediaArray) {
    const index = mediaArray.findIndex(media => media.id === currentMedia.id);
    currentMedia = mediaArray[(index - 1 + mediaArray.length) % mediaArray.length]; // Utilisation de la boucle infinie
    displayMedia(currentMedia);
}
// Fonction pour gérer les événements clavier dans la lightbox
function handleLightboxKeydown(event) {
    switch (event.code) {
        case 'ArrowLeft':
            // Pour la flèche gauche, afficher le média précédent
            displayPreviousMedia(mediaArray);
            break;
        case 'ArrowRight':
            // Pour la flèche droite, afficher le média suivant
            displayNextMedia(mediaArray);
            break;
        case 'Escape':
            // Pour la touche "Escape", fermer la lightbox
            closeLightbox();
            break;
        default:
            break;
    }
}
