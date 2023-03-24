import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardsList = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
      <a class="gallery__link" ${original} ">
        <img
          class="gallery__image"
          src ="${preview}"
          data-source ="${original}"
          alt ="${description}"
        />
      </a>
    </li>`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsList);
galleryContainer.addEventListener('click', selectGalleryEl);

function selectGalleryEl(event) {
  const galleryImage = event.target.classList.contains('gallery__image');
   if (!galleryImage){
       return;
   }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source} " width="900" height="700">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
  );

  const onKeydownEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  instance.show();
}