import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);


function createGallery (items) {

   return galleryItems.map(({preview, original, description}) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
   }).join('');

};


galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {event.preventDefault(); 
  if (!event.target.classList.contains('gallery__image')) {return;} 
  const imageUrl = event.target.dataset.source; 
  const modal = basicLightbox.create(`<img src="${imageUrl}" alt="${event.target.alt}">`);
  modal.show(); 
  document.addEventListener('keydown', onEscapeCloseModal); 
  function onEscapeCloseModal(event) {if (event.code === "Escape") {modal.close()}}};






