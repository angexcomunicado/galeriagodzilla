const imagenes = document.querySelectorAll('.imagen');
const modal = document.getElementById('modal1');
const close = document.getElementById('close');
const modalImage = document.getElementById('imageModal');
const imagesArray = Array.from(imagenes);
let currentIndex = 0;

imagesArray.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
        currentIndex = index;
    })
}) 

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }

})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    } else if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % imagesArray.length;
        modalImage.src = imagesArray[currentIndex].src;
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        modalImage.src = imagesArray[currentIndex].src;
    }
})