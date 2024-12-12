const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
let currentImageIndex = 0;
const images = Array.from(galleryItems).map(item => item.src);

// Function to change the image in the lightbox
function changeImage() {
  lightboxImg.src = images[currentImageIndex];
}

// Event listener for clicking on the images in the gallery
galleryItems.forEach((image, index) => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    currentImageIndex = index;
    changeImage();
    startSlideshow(); // Start the slideshow
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  stopSlideshow(); // Stop the slideshow when the lightbox is closed
});

// Function to start the slideshow
let slideshowInterval;
function startSlideshow() {
  slideshowInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back to the first image after the last one
    changeImage();
  }, 3000); // Change image every 3 seconds
}

// Function to stop the slideshow
function stopSlideshow() {
  clearInterval(slideshowInterval); // Stop the automatic image change
}

// Close the lightbox if clicked outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    lightbox.style.display = 'none';
    stopSlideshow(); // Stop slideshow when clicking outside the image
  }
});
