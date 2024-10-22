// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        const video = document.getElementById('video');
        video.srcObject = stream;
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        // Clown filter logic
        function applyClownFilter() {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Here you would draw clown features, like a red nose or makeup
            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2, false);
            context.fillStyle = 'red';
            context.fill();

            context.beginPath();
            context.arc(canvas.width / 2, canvas.height / 3, 10, 0, Math.PI * 2, false);
            context.fillStyle = 'blue';
            context.fill();

            context.beginPath();
            context.arc(canvas.width / 2, (2 * canvas.height) / 3, 10, 0, Math.PI * 2, false);
            context.fillStyle = 'blue';
            context.fill();
        }

        // Apply filter periodically
        setInterval(applyClownFilter, 100);
    })
    .catch(error => {
        console.error('Error accessing the camera', error);
    });
