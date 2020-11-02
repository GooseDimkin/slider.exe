const slide = document.querySelector('.slider__image');
const images = document.querySelectorAll('.slider__image img')

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', ()=> {
    if(counter >= images.length - 1) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', () => {
    if(images[counter].id === 'lastClone') {
        slide.style.transition = 'none';
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(images[counter].id === 'firstClone') {
        slide.style.transition = 'none';
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});