// Function to sort images by most downloaded
function sortByDownloads() {
    let gallery = document.getElementById('imageGallery');
    let images = Array.from(gallery.getElementsByClassName('image-item'));

    images.sort(() => Math.random() - 0.5); // Since there are no downloads, just shuffle

    images.forEach(img => gallery.appendChild(img));
}

// Sort images randomly
function sortByRandom() {
    let gallery = document.getElementById('imageGallery');
    let images = Array.from(gallery.getElementsByClassName('image-item'));

    images.sort(() => Math.random() - 0.5);

    images.forEach(img => gallery.appendChild(img));
}

// Basic search function
function searchImages() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let gallery = document.getElementById('imageGallery');
    let images = gallery.getElementsByClassName('image-item');

    for (let i = 0; i < images.length; i++) {
        let tags = images[i].dataset.tags.toLowerCase();
        if (tags.indexOf(input) > -1) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
    }
}
