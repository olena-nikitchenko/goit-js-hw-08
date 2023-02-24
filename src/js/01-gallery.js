// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const containerImages = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

containerImages.insertAdjacentHTML('beforeend', cardsMarkup);


function createImageCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
        })
        .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 500,
});
