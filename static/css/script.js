document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', document.getElementById('videoInput').files[0]);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        document.getElementById('result').innerText = `Prediction: ${data.prediction}, Probability: ${data.probability}`;
    } catch (error) {
        console.error('Error:', error);
    }
});
