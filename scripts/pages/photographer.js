import '../../css/style.scss';
import { getPhotographerById, getMediaByPhotographer, sortByDate, sortByName, sortByPopularity } from '../utils/api';
import { closeModal } from '../utils/contactForm';
import { detailPhotographer } from '../templates/detailsPhotographer';
import { closeLightbox } from '../utils/lightBox';

const getUrlParamsId = () => {
    let url = window.location.href;
    let urlObj = new URL(url);
    let id = urlObj.searchParams.get("id");
    return id;
}

const sortMedia = async (selectedOption) => {
    const id = getUrlParamsId();
    const photographer = await getPhotographerById(id);
    const medias = await getMediaByPhotographer(id);

    switch (selectedOption) {
        case 'name':
            photographer.medias = sortByName(medias);
            break;
        case 'date':
            photographer.medias = sortByDate(medias);
            break;
        case 'popularity':
            photographer.medias = sortByPopularity(medias);
            break;
        default:
            break;
    }

    const detail = detailPhotographer(photographer);
    detail.createDisplayDom(photographer);
}

const init = async () => {
    /*
        j'ajoute tous mes listener ici
    */

    //pour le filtre par date    
    document.querySelector('#sortBySelect').addEventListener('change', () => {
        const selectedOption = document.querySelector('#sortBySelect').value;
        sortMedia(selectedOption);
    });

    //pour fermer la modale
    document.querySelector('#closeModal').addEventListener('click', () => {
        closeModal();
    });

    //pour fermer la lightbox
    document.querySelector('#closeLightbox').addEventListener('click', () => {
        closeLightbox();
    });

    const id = getUrlParamsId();
    const photographer = await getPhotographerById(id);
    const medias = await getMediaByPhotographer(id);

    photographer.medias = medias;
    const detail = detailPhotographer(photographer);
    detail.createDisplayDom(photographer);
}

init();