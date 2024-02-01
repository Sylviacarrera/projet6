import { displayModal } from "../utils/contactForm"
// j'importe ici la fonction qui permet d'ouvrir la lightbox
import { displayLightBox, displayNextMedia, displayPreviousMedia, handleLightboxKeydown } from "../utils/lightBox"

export const detailPhotographer = data => {
  const { name, city, country, tagline, portrait, medias, id, price } = data

  function createDisplayDom(data) {

    /*
      j'ajoute les listener pour les fleche gauche et droite pour la lightbox, si je fait ca dans le fichier photographer.js, 
      je n'aurais pas acces au tableau de mes media filtré, sauf si je remove le listener, et en ajoute un autre a chaque fois...
      autant le faire la
    */
    document.querySelector('#previousArrow').addEventListener('click', () => {
      displayPreviousMedia(medias)
    })
    document.querySelector('#nextArrow').addEventListener('click', () => {
      displayNextMedia(medias)
    })

    // Ajoutez l'attribut tabindex aux flèches
    document.querySelector('#previousArrow').setAttribute('tabindex', '0');
    document.querySelector('#nextArrow').setAttribute('tabindex', '0');



    let nmbLike = 0 // nombre total de like a 0
    const nmbLikeContainer = document.querySelector('#nmbLike')
    const priceContainer = document.querySelector('#priceContainer')
    const container = document.querySelector("#detailContainer")
    const mediaContainer = document.querySelector('#mediaContainer')
    mediaContainer.innerHTML = ""
    nmbLikeContainer.innerHTML = ""
    priceContainer.innerHTML = ""
    container.innerHTML = ""
    const paraContainer = document.createElement('div')
    container.appendChild(paraContainer)
    paraContainer.classList.add('paragraphe')
    const titleContainer = document.createElement('h1')
    titleContainer.textContent = name
    paraContainer.appendChild(titleContainer)
    const locationContainer = document.createElement('p')
    locationContainer.textContent = `${city}, ${name}`
    paraContainer.appendChild(locationContainer)
    const descriptionContainer = document.createElement('p')
    descriptionContainer.textContent = tagline
    descriptionContainer.classList.add('custom-description');
    paraContainer.appendChild(descriptionContainer)
    const buttonContainer = document.createElement('button')
    buttonContainer.classList.add('contact_button')
    buttonContainer.addEventListener('click', () => {
      displayModal(name)
    })
    buttonContainer.textContent = "Contactez-moi"
    // Ajoutez l'attribut tabindex
    buttonContainer.setAttribute('tabindex', '0');
    container.appendChild(buttonContainer)
    const avatar = document.createElement('img')
    avatar.setAttribute('src', `/assets/photographers/${portrait}`)
    container.appendChild(avatar)
    medias.forEach((el) => {
      const photoItem = document.createElement('div')
      photoItem.classList.add('photo-item')


      mediaContainer.appendChild(photoItem)
      if (el.video) {
        const video = document.createElement('video')
        photoItem.appendChild(video)
        const source = document.createElement('source')
        source.setAttribute('src', `/assets/medias/${el.video}`)
        video.appendChild(source)
        // Ajoutez cet attribut tabindex à chaque élément contenant le média
        video.setAttribute('tabindex', '0');
        // dans le container de la photo ou la video, j'ajoute un listener pour afficher la ligthbox
        video.addEventListener('click', (event) => {

          displayLightBox(el,medias) // je place le media courant en paramettre, pour pouvoir l'afficher dans la fonction d'affichage de la lightbox
        })
        // Ajoutez cet événement pour gérer la touche "Entrée"
        video.addEventListener('keydown', (event) => {
          if (event.code === 'Enter') {
            displayLightBox(el,medias);
          }
        });
      } else {
        const img = document.createElement('img')
        img.setAttribute('src', `/assets/medias/${el.image}`)
        photoItem.appendChild(img)
        // Ajoutez cet attribut tabindex à chaque élément contenant le média
        img.setAttribute('tabindex', '0');
        // dans le container de la photo ou la video, j'ajoute un listener pour afficher la ligthbox
        img.addEventListener('click', () => {
          displayLightBox(el,medias) // je place le media courant en paramettre, pour pouvoir l'afficher dans la fonction d'affichage de la lightbox
        })
        // Ajoutez cet événement pour gérer la touche "Entrée"
        img.addEventListener('keydown', (event) => {
          if (event.code === 'Enter') {
            displayLightBox(el,medias);
          }
        });
      }
      const descriptionContainer = document.createElement('div')
      photoItem.appendChild(descriptionContainer)
      const para = document.createElement('p')
      para.textContent = el.title
      descriptionContainer.appendChild(para)
      descriptionContainer.classList.add("section-picture-footer")
      const likecontainer = document.createElement('div')
      likecontainer.classList.add('like-container')
      descriptionContainer.appendChild(likecontainer)
      const heart = document.createElement('i')
      heart.classList.add('fa-regular', 'fa-heart')
      heart.setAttribute('tabindex', '0');  // Ajoutez l'attribut tabindex
      heart.setAttribute('data-like-button', 'true'); // Ajoutez cet attribut personnalisé
      likecontainer.appendChild(heart)

      heart.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
          isLiked = !isLiked
          paralike.textContent = isLiked ? el.likes + 1 : el.likes
          nmbLikeContainer.textContent = isLiked ? parseInt(nmbLikeContainer.textContent) + 1 : parseInt(nmbLikeContainer.textContent) - 1
          heart.classList.toggle('fa-regular')
          heart.classList.toggle('fa-solid')        }

      });

      let isLiked = false
      heart.style.color = "#901C1C"
      nmbLike += el.likes
      heart.addEventListener('click', (event) => {
        isLiked = !isLiked
        paralike.textContent = isLiked ? el.likes + 1 : el.likes
        nmbLikeContainer.textContent = isLiked ? parseInt(nmbLikeContainer.textContent) + 1 : parseInt(nmbLikeContainer.textContent) - 1
        heart.classList.toggle('fa-regular')
        heart.classList.toggle('fa-solid')
      })
      const paralike = document.createElement('p')
      paralike.textContent = el.likes
      likecontainer.appendChild(paralike)
      nmbLikeContainer.textContent = nmbLike
      priceContainer.textContent = `${price} €`



    });





  }
  return { name, city, country, tagline, portrait, createDisplayDom }
}







