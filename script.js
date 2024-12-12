const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
let currentImageIndex = 0;
const images = Array.from(galleryItems).map(item => item.src);function changeImage() {
  lightboxImg.src = images[currentImageIndex];
}galleryItems.forEach((image, index) => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    currentImageIndex = index;
    changeImage();
    startSlideshow();
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  stopSlideshow(); 
});
let slideshowInterval;
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeImage();
  }, 3000); 
}
function stopSlideshow() {
  clearInterval(slideshowInterval); 
}lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    lightbox.style.display = 'none';
    stopSlideshow();
  }
});
