import '../../css/style.scss';
import { photographerTemplate } from '../templates/photographer.js';

async function getPhotographers() {
  // Récupérer les données JSON du fichier
  const response = await fetch("/data/photographers.json");

  // Convertir les données JSON en un tableau d'objets JavaScript
  const data = await response.json();

  // Remplacer les données de test
  const photographers = data.photographers;

  return photographers;
}

async function displayData(photographers) {
    // Récupérer la section des photographes
    const photographersSection = document.querySelector(".photographer_section");
  
    // Parcourir les photographes
    for (const photographer of photographers) {
      // Créer le modèle du photographe
      const photographerModel = photographerTemplate(photographer);
  
      // Créer le DOM de la carte du photographe
      const userCardDOM = photographerModel.getUserCardDOM();
  
      // Ajouter la carte du photographe à la section
      photographersSection.appendChild(userCardDOM);
  
      // Ajouter l'image du photographe
      const image = document.createElement("img");
      image.src = `/public/assets/images/Photographers/${photographer.portrait}`;
      image.alt = photographer.name;
  
      // Ajouter les informations du photographe
      const infoContainer = document.createElement("div");
      infoContainer.classList.add("photographer-info");
  
      const cityElement = document.createElement("span");
      cityElement.innerText = `${photographer.city}, `;
  
      const countryElement = document.createElement("span");
      countryElement.innerText = `${photographer.country}`;
  
      const taglineElement = document.createElement("p");
      taglineElement.innerText = `${photographer.tagline}`;
  
      const priceElement = document.createElement("p");
      priceElement.innerText = `${photographer.price} €/jour`;
  
      // Ajouter les informations à la carte du photographe
      infoContainer.appendChild(cityElement);
      infoContainer.appendChild(countryElement);
      infoContainer.appendChild(taglineElement);
      infoContainer.appendChild(priceElement);
      userCardDOM.appendChild(infoContainer);
  
      // Add a click event listener to the article element
      userCardDOM.addEventListener("click", (event) => {
        window.location.href = "#";
      });
    }
  }


async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();

  // Affiche les données des photographes
  displayData(photographers);
}

init();