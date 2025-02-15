const imagenes = document.querySelectorAll('.imagen');
const modal = document.getElementById('modal1');
const close = document.getElementById('close');
const modalImage = document.getElementById('imageModal');

imagenes.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
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
    }
})