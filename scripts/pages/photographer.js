import '../../css/style.scss';
import { getPhotographers, getMedia } from '../utils/api';

const getUrlParamsId = ()=>{
    let url = window.location.href;
    let urlObj = new URL(url);
    let id = urlObj.searchParams.get("id");
    return id
}

const getPhotographerById = async()=>{
    const id = getUrlParamsId()
    const photographer = await getPhotographers()
    for (let i = 0; i < photographer.length; i++) {
        if (photographer[i].id === parseInt(id)) {
            return photographer[i]
        }
    }
}

const init = async() => {
    const photographer = await getPhotographerById()
    console.log(photographer);
    
}

init()