const URL_DATA = 'data/photographers.json'

export const getPhotographers = async() => {
   const response = await fetch(URL_DATA)
   const data = await response.json()
   return data.photographers
}

export const getMedias = async()=>{
   const response = await fetch(URL_DATA)
   const data = await response.json()
   return data.media
}

export const getMediaByPhotographer = async(id)=>{
   const medias = await getMedias()
   const mediasFinded = medias.filter(el =>  parseInt(id) === parseInt(el.photographerId))
   return mediasFinded
}

export const getPhotographerById = async(id) => {
   const response = await getPhotographers()
   const photographerFinded = response.find(el => parseInt(id) === parseInt(el.id))
   return photographerFinded
}

/* Ici, les trois fonction qui vont gerer les filtres dans la base de donnée, 
   par date, par popularity et par name, ce sont des filtres dis descendant, c'est a dire qu'il tri les données du plus petit au plus grand, ou par ordre alphabetique (pour les titre)
*/


/*
   Cette fonction tri par date, en gros, je converti la date en chaine de caracteres que me donne le json, et je le converti en vrai date,
   enfin.... ca va me donner le nombre de milliseconde passer depuis le premier janvier 1970 (en simplifier)
   donc je peut comparer les deux pour savoir qui est la plus petite ou non

*/
export const sortByDate = (mediaArray) => {
   return mediaArray.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
   });
};


/*
Cette fonction tri par popularité, je m'assure que je compare des nombre entier avec parseInt, 
et je tri, en gros, si la valeur b - la valeur a donne un nombre inferieur a 0, c'est que la valeur b est plus petite que a,
c'est comme ca que le tri est fait
*/

export const sortByPopularity = (mediaArray) => {
   return mediaArray.sort((a, b) => {
      const popularityA = parseInt(a.likes)
      const popularityB = parseInt(b.likes)
      return popularityB - popularityA;
   });
};


/* cette fonction tri le tableau des medias par ordre alphabetique.
   en gros, elle met les titre en minuscule (pour eviter les difference, elle compare, et tri le tableau) 
*/

export const sortByName = (mediaArray) => {
   return mediaArray.sort((a, b) => {
      const nameA = a.title.toLowerCase(); // Utilisez toLowerCase() pour ignorer la casse
      const nameB = b.title.toLowerCase();
      return nameA.localeCompare(nameB);
   });
};


