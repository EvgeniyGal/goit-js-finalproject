import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
}

list.innerHTML = createMarkup(galleryItems);

var gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
gallery.on('show.simplelightbox', () => {});
