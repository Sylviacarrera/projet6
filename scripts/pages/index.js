import '../../css/style.scss';
import { photographerTemplate } from '../templates/photographer.js';
import { getPhotographers } from '../utils/api.js';
import { photographersSection } from '../utils/domLinker.js';


const displayData = data => {
  data.forEach(item => {
    // Créer le modèle du photographe
    const photographerModel = photographerTemplate(item);

    // Créer le DOM de la carte du photographe
    const userCardDOM = photographerModel.getUserCardDOM();

    // Ajouter la carte du photographe à la section
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  // Affiche les données des photographes
  displayData(photographers);
}

init();