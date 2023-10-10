const imagesData = [
    {
        src: 'img/img1.jpg',
        alt: 'Imagen 1',
        description: 'Conocer nuevos lugares es uno de mis pasatiempos favoritos.'
    },
    {
        src: 'img/img2.jpg',
        alt: 'Imagen 2',
        description: 'Compartir momentos con mi familia me agrada mucho.'
    },
    {
        src: 'img/img3.jpg',
        alt: 'Imagen 3',
        description: 'Me propongo nuevos retos que me ayuden a mejorar mi salud.'
    },
    {
        src: 'img/img4.jpg',
        alt: 'Imagen 4',
        description: 'Prácticar actividades al aire libre es una forma muy eficiente de manejar el estrés.'
    }
];

const gallery = document.querySelector('.gallery');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
let currentIndex = 0;

// Generar la galería de imágenes dinámicamente
imagesData.forEach((imageData) => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image';
    const image = document.createElement('img');
    image.src = imageData.src;
    image.alt = imageData.alt;
    const description = document.createElement('p');
    description.textContent = imageData.description;

    imageContainer.appendChild(image);
    imageContainer.appendChild(description);
    gallery.appendChild(imageContainer);
});

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);

// Agregar evento al botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagesData.length) % imagesData.length;
    showImage(currentIndex);
});

// Agregar evento al botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagesData.length;
    showImage(currentIndex);
});

// Función para mostrar una imagen específica
function showImage(index) {
    const images = document.querySelectorAll('.image');
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
