document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-item');

    imageItems.forEach(item => {
        const imageId = item.getAttribute('data-id');
        const downloadButton = item.querySelector('.download-button');
        const downloadCountElement = document.createElement('span');
        downloadCountElement.classList.add('download-count');
        downloadCountElement.innerText = '0 downloads'; // Default value

        // Append the download count element after the download button
        downloadButton.after(downloadCountElement);

        // Fetch download count
        fetch(`/.netlify/functions/getDownloadCount?imageId=${imageId}`)
            .then(response => {
                if (!response.ok) {
                    // Handle non-200 responses
                    throw new Error('Failed to fetch download count');
                }
                return response.json();
            })
            .then(data => {
                downloadCountElement.innerText = `${data.count} downloads`;
            })
            .catch(error => {
                console.error('Error fetching download count:', error);
                // Default to 0 downloads on error
                downloadCountElement.innerText = '0 downloads';
            });
    });
});

// Increment download count
function incrementDownload(imageId) {
    fetch(`/.netlify/functions/incrementDownload?imageId=${imageId}`, { method: 'POST' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to increment download count');
            }
            return response.json();
        })
        .then(data => {
            console.log('Download incremented:', data);
            // Optionally update the UI here
        })
        .catch(error => {
            console.error('Error incrementing download count:', error);
        });
}
