const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.img-slider');
const slides_text = slider.querySelectorAll('.text-img');

// Store the total number of images
const slideCount = slides.length;

let activeSlide = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
slides[activeSlide].classList.remove('active');
slides[activeSlide].style.display = "none";  
slides_text[activeSlide].style.display = "none";
activeSlide++;
if (activeSlide === slideCount) {
	activeSlide = 0;
}
slides[activeSlide].classList.add('active');
slides[activeSlide].style.display = "block";  
slides_text[activeSlide].style.display = "block";

}, 3000);
