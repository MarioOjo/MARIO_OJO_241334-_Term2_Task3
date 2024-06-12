document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Thank you for your message!'); // Display the thank you message
});


let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    slides[currentIndex].classList.add('active');
}

// Initialize the carousel with the first image active
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-item')[0].classList.add('active');
});
