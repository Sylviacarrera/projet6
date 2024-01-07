// export async function getPhotographers() {
//     // Récupérer les données JSON du fichier
//     const response = await fetch("data/photographers.json");

//     // Convertir les données JSON en un tableau d'objets JavaScript
//     const data = await response.json();

//     // Remplacer les données de test
//     const photographers = data.photographers;

//     return photographers;
// }
const URL_DATA = 'data/photographers.json'

export const getPhotographers = async() => {
   const response = await fetch(URL_DATA)
   const data = await response.json()
   return data.photographers
}


export const getMedia = async() => {
    const response = await fetch(URL_DATA)
    const data = await response.json()
    return data.media
 }




