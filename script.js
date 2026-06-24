const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");

function loadGallery() {
    thumbnails.innerHTML = "";

    images.forEach((image, index) => {
        const thumb = document.createElement("img");
        thumb.src = image;

        if (index === currentIndex) {
            thumb.classList.add("active");
        }

        thumb.addEventListener("click", () => {
            currentIndex = index;
            updateGallery();
        });

        thumbnails.appendChild(thumb);
    });
}

function updateGallery() {
    mainImage.src = images[currentIndex];

    document.querySelectorAll(".thumbnails img")
        .forEach((img, index) => {
            img.classList.remove("active");

            if (index === currentIndex) {
                img.classList.add("active");
            }
        });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

loadGallery();
updateGallery();

setInterval(nextImage, 3000);