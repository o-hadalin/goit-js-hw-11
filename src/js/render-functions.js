import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images, galleryElement) {
  galleryElement.innerHTML = images.map(img => `
    <a href="${img.largeImageURL}">
      <img src="${img.webformatURL}" alt="${img.tags}">
      <div>👍 ${img.likes} 👀 ${img.views} 💬 ${img.comments} ⬇️ ${img.downloads}</div>
    </a>
  `).join("");
  const lightbox = new SimpleLightbox("a", { /* опції */ });
  lightbox.refresh();
}
