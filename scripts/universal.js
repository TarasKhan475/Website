const alertUser = (message, status) => {
	const length = 4000;
	if (status === undefined) {
		status = 'success';
	}
	if (message === undefined) {
		message = 'No message sent';
		status = 'error';
	}

	// Create or get the alert element
	let alertRef = document.getElementById('custom-alert');
	if (!alertRef) {
		alertRef = document.createElement('div');
		alertRef.id = 'custom-alert'; // Ensures unique ID for retrieval
		alertRef.className = 'alert';
		document.body.appendChild(alertRef);
	}

	// Set alert properties and display
	alertRef.setAttribute('type', status);
	alertRef.innerHTML = `${message}<div class="alertBar"></div>`;
	alertRef.style.display = 'block';
	alertRef.style.animation = 'fadeIn 1.25s';

	setTimeout(() => {
		alertRef.style.animation = 'fadeOut 1.25s';
		setTimeout(() => {
			alertRef.style.display = 'none';
		}, 1250); // Wait for fade out to finish
	}, length);
};
const Loader = (show) => {
	let loaderRef = document.getElementById('loader');

	if (show) {
		// If loader doesn't exist, create it
		if (!loaderRef) {
			loaderRef = document.createElement('div');
			loaderRef.id = 'loader';
			loaderRef.className = 'loader';
			loaderRef.innerHTML = `
        <svg width="135" height="135" xmlns="http://www.w3.org/2000/svg">
<path d="M125,85 a60,60 0 1,0 -115,0" fill="none" stroke="#aaa" stroke-width="5" />        </svg>
      `;
			document.body.appendChild(loaderRef);
		}

		loaderRef.style.display = 'block';
	} else if (!show) {
		if (loaderRef) {
			loaderRef.style.display = 'none';
		}
	}
};
Loader(true);
window.onload = function () {
	Loader(false);
};
console.log('All js code worked');
