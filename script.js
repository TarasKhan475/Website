document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.download-button').forEach(button => {
        button.addEventListener('click', async (event) => {
            event.preventDefault();
            const imageId = button.getAttribute('data-id');
            
            try {
                // Fetch the current download count (optional)
                const response = await fetch(`/netlify/functions/getDownloadCount?imageId=${imageId}`);
                if (!response.ok) throw new Error('Failed to fetch download count');
                const data = await response.json();
                
                // Increment the download count
                const incrementResponse = await fetch('/netlify/functions/incrementDownload', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ imageId })
                });
                
                if (!incrementResponse.ok) throw new Error('Failed to increment download count');
                const incrementData = await incrementResponse.json();

                // Redirect to download URL
                window.location.href = `images/${imageId}.png`;
                
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
});
