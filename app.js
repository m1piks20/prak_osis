document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.header__burger-btn').addEventListener('click', () => {
        document.querySelector('.header').classList.toggle('open');
    });
});




var slides = [
    { 
        image: '../img/avatar.png', 
        title: 'lorem ipsum dolor sit amet', 
        text: 'At vero eos et accusamus et iusto odio digni goikussimos ducimus qui to bonfoe blanditiis <br> praese. Ntium voluum deleniti atque corrupti quos.',
        trainerName: 'Dariana Hammes',
        course: 'Yoga Master'
    },
    { 
        image: '../img/avatar.png', 
        title: 'From the moment you walk through the door you know.', 
        text: 'At vero eos et accusamus et iusto odio digni goikussimos ducimus qui to bonfoe blanditiis <br> praese. Ntium voluum deleniti atque corrupti quos.',
        trainerName: 'Dariana Hammes',
        course: 'Yoga Master'
    },
    { 
        image: '../img/avatar.png', 
        title: 'From the moment <br> you walk through the <br> door you know.', 
        text: 'At vero eos et accusamus et iusto odio digni goikussimos ducimus qui to bonfoe blanditiis <br> praese. Ntium voluum deleniti atque corrupti quos.',
        trainerName: 'Dariana Hammes',
        course: 'Yoga Master'
    }
];

var slideIndex = 1;

let inactiveDotSVG = `
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="7" cy="7" r="6" fill="white" fill-opacity="0.15" />
  <circle cx="7" cy="7" r="6.5" stroke="white" stroke-opacity="0.25" />
</svg>`;


let activeDotSVG = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="13" fill="white" fill-opacity="0.15" />
  <circle cx="14" cy="14" r="13.5" stroke="white" stroke-opacity="0.25" />
  <circle cx="14" cy="14" r="6" fill="#F23849" />
</svg>`;

function updateSlide() {
    var slide = slides[slideIndex];
    var slider = document.querySelector('.slider');
    slider.style.animation = 'none'; // Сбросить анимацию
    slider.offsetHeight; // Триггер переключения
    slider.style.animation = null;
    document.querySelector('.slider img').src = slide.image;
    document.querySelector('.slider h1').innerHTML = slide.title;
    document.querySelector('.slider #main_p').innerHTML = slide.text;
    document.querySelector('.slider #trainer-name').textContent = slide.trainerName;
    document.querySelector('.slider #course').textContent = slide.course;
    

    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.style.opacity = 1; // Сделайте все .dot прозрачными
        dot.innerHTML = inactiveDotSVG;
    });

    
    dots[slideIndex].innerHTML = activeDotSVG;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlide();
}


updateSlide();

// setInterval(nextSlide, 5000);




function animateButton() {
    var button = document.querySelector('.image-button');
    button.classList.add('clicked');
    setTimeout(function() {
        button.classList.remove('clicked');
    }, 500);
}


document.addEventListener('DOMContentLoaded', function() {
    var prevButton = document.querySelector('.previos');
    var prevButtonImg = prevButton.querySelector('img');
    prevButton.addEventListener('mouseover', function() {
        prevButtonImg.src = 'img/Arrow---Right.png';
    });
    prevButton.addEventListener('mouseout', function() {
        prevButtonImg.src = 'img/arrow__rewers.png';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var prevButton = document.querySelector('.next');
    var prevButtonImg = prevButton.querySelector('img');
    prevButton.addEventListener('mouseover', function() {
        prevButtonImg.src = 'img/Arrow---Right__revers.png';
    });
    prevButton.addEventListener('mouseout', function() {
        prevButtonImg.src = 'img/Arrow---leftt.png';
    });
});


  


var swiper = new Swiper('.swiper', {
    
    slidesPerView: 'auto',
    watchOverflow: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

swiper.update();

let currentSlide = 0;
const textSlides = document.querySelectorAll('.slider_txt .slide');
let imageSlides = document.querySelectorAll('.slider_img .img1, .slider_img .img2, .slider_img .img3, .slider_img .img4, .slider_img .img5, .slider_img .img6, .slider_img .img7');

function showSlide(index, direction = 'forward') {
    // Скрываем все слайды
    textSlides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.style.animation = ''; // Reset animation
    });
    imageSlides.forEach(slide => {
        slide.style.transform = 'scale(0.5)';
        slide.style.opacity = '0.5';
        slide.style.border = 'none'; // Remove border from non-active images
    });

    // Показываем текущий слайд
    textSlides[index].style.display = 'block';
    textSlides[index].style.animation = direction === 'forward' ? 'slideInRight 1s forwards' : 'slideInLeft 1s forwards'; // Apply slide in animation to new slide
    imageSlides[index].style.transform = 'scale(1)';
    imageSlides[index].style.opacity = '1';
    imageSlides[index].style.border = '2px solid red'; // Add red border to active image
    imageSlides[index].style.borderRadius = '50%'; // Make the border round
}

// Обработчики для кнопок "вперед" и "назад"
document.querySelector('.next_slide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % textSlides.length;
    showSlide(currentSlide, 'forward');
});

document.querySelector('.prev_slide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + textSlides.length) % textSlides.length;
    showSlide(currentSlide, 'backward');
});

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);

$(document).ready(function(){
    if($(window).width() <= 393){
        $('.input_news').attr('maxlength','14');
    }
});