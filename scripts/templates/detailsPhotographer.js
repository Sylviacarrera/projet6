import { displayModal } from "../utils/contactForm"
import { nmbLikeContainer, priceContainer, container, mediaContainer } from '../utils/domLinker.js';
// j'importe ici la fonction qui permet d'ouvrir la lightbox
import { displayLightBox, displayNextMedia, displayPreviousMedia } from "../utils/lightBox"

export const detailPhotographer = data => {
  const { name, city, country, tagline, portrait, medias, price } = data;

  function createDisplayDom() {
    // J'ajoute les listeners pour les flèches gauche et droite de la lightbox ici,
    // car c'est l'endroit où j'ai accès au tableau de mes médias filtrés.

    document.querySelector('#previousArrow').addEventListener('click', () => {
      displayPreviousMedia(medias);
    });

    document.querySelector('#nextArrow').addEventListener('click', () => {
      displayNextMedia(medias);
    });

    // Ajoutez l'attribut tabindex aux flèches
    document.querySelector('#previousArrow').setAttribute('tabindex', '0');
    document.querySelector('#nextArrow').setAttribute('tabindex', '0');

    let nmbLike = 0; // nombre total de like à 0

    // Nettoie les conteneurs
    mediaContainer.innerHTML = "";
    nmbLikeContainer.innerHTML = "";
    priceContainer.innerHTML = "";
    container.innerHTML = "";

    // Crée le conteneur de paragraphe
    const paraContainer = document.createElement('div');
    container.appendChild(paraContainer);
    paraContainer.classList.add('paragraphe');

    // Ajoute le titre
    const titleContainer = document.createElement('h1');
    titleContainer.textContent = name;
    paraContainer.appendChild(titleContainer);

    // Ajoute l'emplacement
    const locationContainer = document.createElement('p');
    locationContainer.textContent = `${city}, ${name}`;
    paraContainer.appendChild(locationContainer);

    // Ajoute la description
    const descriptionContainer = document.createElement('p');
    descriptionContainer.textContent = tagline;
    descriptionContainer.classList.add('custom-description');
    paraContainer.appendChild(descriptionContainer);

    // Ajoute le bouton de contact
    const buttonContainer = document.createElement('button');
    buttonContainer.classList.add('contact_button');
    buttonContainer.addEventListener('click', () => {
      displayModal(name);
    });
    buttonContainer.textContent = "Contactez-moi";
    // Ajoutez l'attribut tabindex
    buttonContainer.setAttribute('tabindex', '0');
    container.appendChild(buttonContainer);

    // Ajoute l'avatar
    const avatar = document.createElement('img');
    avatar.setAttribute('src', `/assets/photographers/${portrait}`);
    avatar.alt = name
    container.appendChild(avatar);

    // Parcourt les médias
    medias.forEach((el) => {
      const a = document.createElement('a')
      a.href = '#'

      const photoItem = document.createElement('article');
      photoItem.classList.add('photo-item');

      a.appendChild(photoItem)
      mediaContainer.appendChild(a);

      if (el.video) {
        // Ajoute la vidéo
        const video = document.createElement('video');
        photoItem.appendChild(video);

        const source = document.createElement('source');
        source.setAttribute('src', `/assets/medias/${el.video}`);
        source.alt = el.title
        video.appendChild(source);

        // Ajoutez cet attribut tabindex à chaque élément contenant le média
        video.setAttribute('tabindex', '0');

        // Ajoute un listener pour afficher la lightbox
        video.addEventListener('click', () => {
          displayLightBox(el, medias);
        });

        // Ajoute cet événement pour gérer la touche "Entrée"
        video.addEventListener('keydown', (event) => {
          if (event.code === 'Enter') {
            displayLightBox(el, medias);
          }
        });
      } else {
        // Ajoute l'image
        const img = document.createElement('img');
        img.setAttribute('src', `/assets/medias/${el.image}`);
        img.alt = el.title
        photoItem.appendChild(img);

        // Ajoutez cet attribut tabindex à chaque élément contenant le média
        img.setAttribute('tabindex', '0');

        // Ajoute un listener pour afficher la lightbox
        img.addEventListener('click', () => {
          displayLightBox(el, medias);
        });

        // Ajoute cet événement pour gérer la touche "Entrée"
        img.addEventListener('keydown', (event) => {
          if (event.code === 'Enter') {
            displayLightBox(el, medias);
          }
        });
      }

      // Ajoute la description
      const descriptionContainer = document.createElement('div');
      photoItem.appendChild(descriptionContainer);
      const para = document.createElement('p');
      para.textContent = el.title;
      descriptionContainer.appendChild(para);
      descriptionContainer.classList.add("section-picture-footer");

      // Ajoute le conteneur de like
      const likecontainer = document.createElement('div');
      likecontainer.classList.add('like-container');
      descriptionContainer.appendChild(likecontainer);

      // Ajoute l'icône de cœur
      const heart = document.createElement('i');
      heart.classList.add('fa-regular', 'fa-heart');
      heart.setAttribute('aria-label', 'likes')
      heart.setAttribute('tabindex', '0');  // Ajoutez l'attribut tabindex
      heart.setAttribute('data-like-button', 'true'); // Ajoutez cet attribut personnalisé
      likecontainer.appendChild(heart);

      // Ajoute un listener pour gérer la touche "Entrée" sur le cœur
      heart.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
          isLiked = !isLiked;
          paralike.textContent = isLiked ? el.likes + 1 : el.likes;
          nmbLikeContainer.textContent = isLiked ? parseInt(nmbLikeContainer.textContent) + 1 : parseInt(nmbLikeContainer.textContent) - 1;
          heart.classList.toggle('fa-regular');
          heart.classList.toggle('fa-solid');
        }
      });

      let isLiked = false;
      heart.style.color = "#901C1C";
      nmbLike += el.likes;

      // Ajoute un listener pour le clic sur le cœur
      heart.addEventListener('click', (event) => {
        event.preventDefault();
        isLiked = !isLiked;
        paralike.textContent = isLiked ? el.likes + 1 : el.likes;
        nmbLikeContainer.textContent = isLiked ? parseInt(nmbLikeContainer.textContent) + 1 : parseInt(nmbLikeContainer.textContent) - 1;
        heart.classList.toggle('fa-regular');
        heart.classList.toggle('fa-solid');
      });

      // Ajoute le paragraphe des likes
      const paralike = document.createElement('p');
      paralike.textContent = el.likes;
      likecontainer.appendChild(paralike);
    });

    // Met à jour le nombre total de likes
    nmbLikeContainer.textContent = nmbLike;
    // Met à jour le prix
    priceContainer.textContent = `${price} €`;
  }

  // Retourne les propriétés pour être utilisées à l'extérieur
  return { name, city, country, tagline, portrait, createDisplayDom };
};





