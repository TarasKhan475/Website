document.addEventListener("DOMContentLoaded", function () {
    const imageItems = document.querySelectorAll(".image-item");

    imageItems.forEach(item => {
        const imageId = item.getAttribute("data-id");
        const downloadButton = item.querySelector(".download-button");

        // Set default download count to 0
        let downloadCountElement = document.createElement("p");
        downloadCountElement.className = "download-count";
        downloadCountElement.innerText = "Downloads: 0";
        item.appendChild(downloadCountElement);

        // Fetch the download count
        fetch(`/netlify/functions/getDownloadCount?imageId=${imageId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.downloadCount !== undefined) {
                    downloadCountElement.innerText = `Downloads: ${data.downloadCount}`;
                } else {
                    console.error(`Download count data missing for ${imageId}`);
                }
            })
            .catch(error => {
                console.error(`Error fetching download count for ${imageId}:`, error);
            });

        // Handle the download button click
        downloadButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link action

            fetch(`/netlify/functions/incrementDownload?imageId=${imageId}`, {
                method: "POST"
            })
                .then(response => {
                    if (response.ok) {
                        // Increment the count in the UI
                        let currentCount = parseInt(downloadCountElement.innerText.replace("Downloads: ", ""));
                        downloadCountElement.innerText = `Downloads: ${currentCount + 1}`;
                    } else {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                })
                .catch(error => {
                    console.error(`Error incrementing download count for ${imageId}:`, error);
                });
        });
    });
});
