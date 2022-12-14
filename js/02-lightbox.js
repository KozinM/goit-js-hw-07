import { galleryItems } from './gallery-items.js';
// Change code below this line

/* finding gallery element*/
const galleryElement = document.querySelector(".gallery");

/* creating array of strings of future gallery elements*/
const galleryContentStringsArray = galleryItems.map(element=>{ return `<a class="gallery__item" href="${element.original}">
<img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`});

/* creating gallery items*/
galleryElement.insertAdjacentHTML("beforeend", galleryContentStringsArray.join(" "));

/* adding event listiner for handling clicks on gallery elements*/
galleryElement.addEventListener('click', clickOnGalleryElementHandler);

/* defining clickOnGalleryElementHandler*/
function clickOnGalleryElementHandler(event) {
    if (event.target.nodeName!=="IMG"){
    return;
    }
    event.preventDefault();
    new SimpleLightbox ('.gallery a', {
        nav: true,
        close: true,
        caption: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
}