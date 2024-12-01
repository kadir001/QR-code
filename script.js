        function generateQRCode() {
            const qrInput = document.getElementById('qr-input').value;
            const qrCodeContainer = document.getElementById('qr-code');

            // Clear previous QR Code
            qrCodeContainer.innerHTML = '';

            if (qrInput.trim() === '') {
                alert('Please enter some text or URL!');
                return;
            }

            const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrInput)}`;

            // Create an image element
            const qrImage = document.createElement('img');
            qrImage.src = apiUrl;
            qrCodeContainer.appendChild(qrImage);
        }