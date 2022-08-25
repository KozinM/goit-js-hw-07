import { galleryItems } from './gallery-items.js';
// Change code below this line

/* finding gallery element*/
const galleryElement = document.querySelector(".gallery");

/* creating array of strings of future gallery elements*/
const galleryContentStringsArray = galleryItems.map(element=>{ return `<div class="gallery__item">
<a class="gallery__link" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
  />
</a>
</div>`});

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

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();

    /*adding and defining infunction event listiner for exit on ESC*/
    document.addEventListener('keydown', keyPressOnEscHandler);
   
    function keyPressOnEscHandler (event) {
        if(event.key === "Escape") {
            instance.close();
            document.removeEventListener('keydown', keyPressOnEscHandler);
        }
    }

}




