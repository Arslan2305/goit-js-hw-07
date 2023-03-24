import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

 gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems.map(({original, preview, description}) => {
    return `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
}).join(''); 
};

  const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
