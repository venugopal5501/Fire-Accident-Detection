document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextImage() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds

    // Make the entire page scrollable on button click
    document.querySelector('.carousel-button').addEventListener('click', function() {
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    document.querySelector('.carousel-button').addEventListener('click', function() {
        window.location.href = 'detection.html';
    });
});