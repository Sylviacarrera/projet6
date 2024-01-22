export const photographerTemplate = data => {
    const { name, portrait, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const a = document.createElement('a')
        a.setAttribute('href', `./photographer.html?id=${id}`)

        const article = document.createElement('article');

        // Ajouter l'image du photographe
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.alt = name;

        const h2 = document.createElement('h2');
        h2.textContent = name;

        // Ajouter les informations du photographe
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("photographer-info");

        const cityElement = document.createElement("span");
        cityElement.innerText = `${data.city}, `;

        const countryElement = document.createElement("span");
        countryElement.innerText = `${data.country}`;

        const taglineElement = document.createElement("p");
        taglineElement.innerText = `${data.tagline}`;

        const priceElement = document.createElement("p");
        priceElement.innerText = `${data.price} €/jour`;

        article.appendChild(img);
        article.appendChild(h2);

        // Ajouter les informations à la carte du photographe
        infoContainer.appendChild(cityElement);
        infoContainer.appendChild(countryElement);
        infoContainer.appendChild(taglineElement);
        infoContainer.appendChild(priceElement);
        article.appendChild(infoContainer);
        a.appendChild(article)

        return (a);
    }
    return { name, picture, getUserCardDOM }
}


