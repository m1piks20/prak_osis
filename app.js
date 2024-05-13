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

//setInterval(nextSlide, 5000);

function animateButton() {
    var button = document.querySelector('.image-button');
    button.classList.add('clicked');
    setTimeout(function() {
        button.classList.remove('clicked');
    }, 500);
}


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slid_img");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     slides[slideIndex-1].style.display = "block";  
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// document.getElementsByClassName("previos")[0].addEventListener("click", function() {
//     slideIndex -= 2;
//     if (slideIndex < 0) {slideIndex = slides.length - 1}
//     showSlides();
// });

// document.getElementsByClassName("next")[0].addEventListener("click", function() {
//     showSlides();
// });