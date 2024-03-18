// source/scripts/index.js
var galleryButton = document.querySelector(".hero__gallery-button");
var galleryList = document.querySelector(".hero__gallery-list");
var imageIndex = 0;
galleryButton.addEventListener("click", () => {
  const screenWidth = window.innerWidth;
  const imageWidth = screenWidth < 375 ? 304 : 365;
  imageIndex = (imageIndex + 1) % galleryList.children.length;
  const scrollDistance = imageWidth * imageIndex;
  galleryList.scrollTo({
    left: scrollDistance
  });
});
