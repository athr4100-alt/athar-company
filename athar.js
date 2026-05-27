
var currentIndex1 = 0;
var totalSlides1 = 4;
var slidesContainer1 = document.getElementById('slides1');
function moveSlider1(direction) {
    currentIndex1 = (currentIndex1 + direction + totalSlides1) % totalSlides1;
    slidesContainer1.style.transform = 'translateX(-' + (currentIndex1 * 100) + '%)';
    document.getElementById('cur1').textContent = currentIndex1 + 1;
}

var currentIndex2 = 0;
var totalSlides2 = 3;
var slidesContainer2 = document.getElementById('slides2');
function moveSlider2(direction) {
    currentIndex2 = (currentIndex2 + direction + totalSlides2) % totalSlides2;
    slidesContainer2.style.transform = 'translateX(-' + (currentIndex2 * 100) + '%)';
    document.getElementById('cur2').textContent = currentIndex2 + 1;
}