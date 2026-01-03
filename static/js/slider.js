let currentSlide = 0;

function updateSlide() {
    const slider = document.getElementById("slider");
    const totalSlides = slider.children.length;
    slider.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
}

function nextSlide() {
    const slider = document.getElementById("slider");
    const totalSlides = slider.children.length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    const slider = document.getElementById("slider");
    const totalSlides = slider.children.length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
}
