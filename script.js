// Increment download count and save it to local storage
function incrementDownload(imageId) {
    let downloads = localStorage.getItem(imageId) ? parseInt(localStorage.getItem(imageId)) : 0;
    downloads += 1;
    localStorage.setItem(imageId, downloads);

    const counterElement = document.querySelector(`[data-id="${imageId}"] .download-counter`);
    if (counterElement) {
        counterElement.textContent = downloads;
    }

    // Handle actual file download
    const fileName = imageId + '.png';
    const link = document.createElement('a');
    link.href = 'images/' + fileName; // Assuming the images are in the "images" folder
    link.download = fileName;
    link.click();
}

// Function to render the download button and counter
function renderDownloadElements() {
    const imageItems = document.querySelectorAll('.image-item');

    imageItems.forEach(item => {
        const imageId = item.dataset.id;
        const downloads = localStorage.getItem(imageId) ? parseInt(localStorage.getItem(imageId)) : 0;

        // Create download counter
        const counterElement = document.createElement('div');
        counterElement.className = 'download-counter';
        counterElement.textContent = downloads + " downloads";  // Add "downloads" text here
        item.appendChild(counterElement);

        // Create download button
        const downloadButton = document.createElement('a');
        downloadButton.className = 'download-button';
        downloadButton.textContent = 'Download';
        downloadButton.href = '#';
        downloadButton.onclick = function () {
            incrementDownload(imageId);
        };
        item.appendChild(downloadButton);
    });
}

// Call the function after DOM is loaded
window.onload = function () {
    renderDownloadElements();
};

// Sort images by most downloaded
function sortByDownloads() {
    let gallery = document.getElementById('imageGallery');
    let images = Array.from(gallery.getElementsByClassName('image-item'));

    images.sort((a, b) => {
        let aDownloads = localStorage.getItem(a.dataset.id) ? parseInt(localStorage.getItem(a.dataset.id)) : 0;
        let bDownloads = localStorage.getItem(b.dataset.id) ? parseInt(localStorage.getItem(b.dataset.id)) : 0;
        return bDownloads - aDownloads;
    });

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
