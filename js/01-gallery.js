import { galleryItems } from './gallery-items.js';
// Change code below this line

function createMarkup(arr) {
  return arr
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

const list = document.querySelector('.gallery');

list.innerHTML = createMarkup(galleryItems);

let currentImage;

function handlerClickImg(ev) {
  ev.preventDefault();
  const imgClickedImg = ev.target;
  if (imgClickedImg.classList.contains('gallery__image')) {
    currentImage = basicLightbox.create(`
    <img src="${imgClickedImg.dataset.source}" width="800" height="600">
`);
    currentImage.show();
  }
}

function handlerEscapePress(ev) {
  if (currentImage.visible() && ev.code === 'Escape') {
    currentImage.close();
  }
}

document.addEventListener('keyup', handlerEscapePress);

list.addEventListener('click', handlerClickImg);
