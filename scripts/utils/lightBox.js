
let currentMedia; // cette variable va permettre de garder en memoire le media a affiche


// cette fonction est pour ouvrir la lightbox, elle appelle aussi la fonction pour afficher l'image ou la video dedans
export function displayLightBox(media) {
    const modal = document.getElementById("lightBox");
	modal.style.display = "block";
    displayMedia(media)
  
    

}


// pour fermer la lightbox
export function closeLightbox() {
    const modal = document.getElementById("lightBox");
    modal.style.display = "none";
}


//cette fonction va afficher l'image ou la video
export function displayMedia(media){

    currentMedia = media // je resset currentMedia, car j'ai besoin de garder en memoire l'exact media sur lequel on est
    const mediaContainer = document.getElementById("mediaContainerlightbox")
    mediaContainer.innerHTML = ""
    if (currentMedia.image) {
        const image = document.createElement('img')
        image.src =  `./assets/medias/${currentMedia.image}`
        mediaContainer.appendChild(image)
    }
    if (currentMedia.video) {
        const video = document.createElement("video")
        video.controls = true
        const source = document.createElement('source')
        source.src =  `./assets/medias/${currentMedia.video}`
        video.appendChild(source)
        mediaContainer.appendChild(video)
    } 
}

//fonction qui vas afficher le media suivant (sur la fleche de droite)
export function displayNextMedia(mediaArray) {
    const index = mediaArray.findIndex(media => media.id === currentMedia.id); // ici, je chope l'index du media qu'on affiche dans le tableau des media, ca me permettra de facilement passer au suivant
    //ici, je m'assure que l'on est pas sur le DERNIER media dans le tableau, sinon... bah y a plus rien a afficher
    if (index !== mediaArray.length - 1) {
        currentMedia = mediaArray[index + 1] // dans ma variable, je set le media qui suis le media precedant
        displayMedia(currentMedia) // il ne me reste plus qu'a afficher le media
    }
}

// fonction qui va afficher le media precedent
export function displayPreviousMedia(mediaArray) {
    const index = mediaArray.findIndex(media => media.id === currentMedia.id); // ici, je chope l'index du media qu'on affiche dans le tableau des media, ca me permettra de facilement passer au suivant
    if (index !== 0) {
        currentMedia = mediaArray[index - 1] //ici, je m'assure que l'on est pas sur le PREMIER media dans le tableau, sinon... bah y a plus rien a afficher
        displayMedia(currentMedia) // il ne me reste plus qu'a afficher le media
    }

}


