// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', galleryContainerClick);

function createImgCardsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                `;
    })
        .join("");
    
}
function galleryContainerClick(evt) {
    evt.preventDefault();

        if (!evt.target.dataset.source) {
        return;
    }
    };

let gall = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
captionDelay: 250,
    
});