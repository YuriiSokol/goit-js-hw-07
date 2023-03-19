import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

// building html structure
galleryItems.forEach((item) => {
  let element = document.createElement("div");
  element.classList.add("gallery__item");

  let link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  let img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;
  img.setAttribute("data-source", item.original);
  link.append(img);
  element.append(link);
  gallery.append(element);
});

//Click event listener

gallery.addEventListener("click", (event) => {
  //finding big image url
  event.preventDefault();

  if (event.target.classList.value !== "gallery__image") {
    return;
  }

  let findGalleryItemByPreview = galleryItems.find(
    (el) => el.preview === event.target.src
  );

  // using balicLightBox to create div
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${findGalleryItemByPreview.description}" width="800" height="600">
`);

  instance.show();

  // modal close from key Escape

  const close = document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        instance.close();
        document.removeEventListener(Object, close);
      }
    },
    { once: true }
  );
});
