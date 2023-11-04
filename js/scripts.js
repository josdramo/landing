/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-container");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > navbar.offsetTop) {
            navbar.classList.add("fixed-top");
        } else {
            navbar.classList.remove("fixed-top");
        }
    });
});

function setupImageBehavior(imageId, iconId) {
    const image = document.getElementById(imageId);
    const icon = document.getElementById(iconId);

    image.addEventListener("mouseenter", function () {
        image.style.transform = "scale(1.1)";
    });

    image.addEventListener("mouseleave", function () {
        image.style.transform = "scale(1)";
    });

    image.addEventListener("click", function () {
        const previewImage = document.createElement("img");
        previewImage.src = image.src;
        previewImage.style.maxWidth = "60%"; // Ancho máximo
        previewImage.style.maxHeight = "60%"; // Alto máximo
        previewImage.style.backgroundColor = "transparent";

        const lightboxContent = document.querySelector(".lightbox-content");
        lightboxContent.innerHTML = ""; // Limpiar cualquier contenido previo
        lightboxContent.appendChild(previewImage);

        icon.style.display = "block"; // Mostrar el icono de ojo
        icon.style.position = "absolute";
        icon.style.top = "50%";
        icon.style.left = "50%";
        icon.style.transform = "translate(-50%, -50%)";
    });
}

const images = document.querySelectorAll(".imagenes");

images.forEach((image, index) => {
    const icon = document.getElementById(`icon-${index + 1}`);
    setupImageBehavior(`image-${index + 1}`, `icon-${index + 1}`);
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");
const lightboxContent = document.querySelector(".lightbox-content");


images.forEach((image, index) => {
    image.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImage.src = image.src;
    });
});

closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

lightboxContent.addEventListener("click", function () {
    lightbox.style.display = "none";
});

