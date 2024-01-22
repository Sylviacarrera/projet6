import '../../css/style.scss';
import { getPhotographerById, getMediaByPhotographer, sortByDate, sortByName, sortByPopularity } from '../utils/api';
import { closeModal } from '../utils/contactForm';
import { detailPhotographer } from '../templates/detailsPhotographer';
import { closeLightbox } from '../utils/lightBox';

const getUrlParamsId = () => {
    let url = window.location.href;
    let urlObj = new URL(url);
    let id = urlObj.searchParams.get("id");
    return id
}

const init = async () => {

    /*
        j'ajoute tous mes listenr ici, ca remplace le onclick qui n'a pas l'air de marcher en script module
    */

    //pour le filtre par date    
    document.querySelector('#sortByDate').addEventListener('click', () => {
        sortMediaByDate()
    })

    //pour le filtre par nom   
    document.querySelector('#sortByName').addEventListener('click', () => {
        sortMediaByName()
    })

    //pour le filtre par popularité
    document.querySelector('#sortByPopularity').addEventListener('click', () => {
        sortMediaByPopularity()
    })

    //pour fermer la modale
    document.querySelector('#closeModal').addEventListener('click', () => {
        closeModal()
    })

    //pour fermer la lightbox
    document.querySelector('#closeLightbox').addEventListener('click', () => {
        closeLightbox()
    })

    const id = getUrlParamsId()
    const photographer = await getPhotographerById(id)
    const medias = await getMediaByPhotographer(id)
    console.log(medias);

    photographer.medias = medias
    const detail = detailPhotographer(photographer)
    detail.createDisplayDom(photographer)
}

const sortMediaByDate = async () => {
    const id = getUrlParamsId()
    const photographer = await getPhotographerById(id)
    const medias = await getMediaByPhotographer(id)
    photographer.medias = sortByDate(medias)
    const detail = detailPhotographer(photographer)
    detail.createDisplayDom(photographer)
}

const sortMediaByPopularity = async () => {
    const id = getUrlParamsId()
    const photographer = await getPhotographerById(id)
    const medias = await getMediaByPhotographer(id)
    photographer.medias = sortByPopularity(medias)
    const detail = detailPhotographer(photographer)
    detail.createDisplayDom(photographer)

}

const sortMediaByName = async () => {
    const id = getUrlParamsId()
    const photographer = await getPhotographerById(id)
    const medias = await getMediaByPhotographer(id)
    photographer.medias = sortByName(medias)
    const detail = detailPhotographer(photographer)
    detail.createDisplayDom(photographer)

}



init()

