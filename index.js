
const slides = document.getElementsByClassName("carousel-item");
slidePosition = 0;
let totalSlides = slides.length;

document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);


function hideAllSlides () {
    for (let slide of slides) {
        slide.classList.add("carousel-item-hidden")
        slide.classList.remove("carousel-item-visible")
    }
}


function moveToNextSlide (){
    hideAllSlides ();
 if (slidePosition === totalSlides - 1) {
     slidePosition = 0;
 } else {
     slidePosition++
 }


 slides[slidePosition].classList.add("carousel-item-visible");
}



function moveToPrevSlide (){
    hideAllSlides ();
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
     slidePosition --
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}












// const slides = document.getElementsByClassName("carousel-item");
// let slidePosition = 0;
// const totalSlides = slides.length;

// document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);
// document.getElementById("carousel-button-prev").addEventListener("click", moveToPreviousSlide);



// function hideAllSlides() {
//  for (let slide of slides) {
//     slide.classList.remove("carousel-item-visible");
//     slide.classList.add("carousel-item-hidden");
    
// }
// }

// function moveToNextSlide() {
//  hideAllSlides();

//  if (slidePosition === totalSlides - 1 ) {
//      slidePosition = 0;
//  } else {
//      slidePosition++ ;
//  }
//  slides[slidePosition].classList.add("carousel-item-visible");
// }

// function moveToPreviousSlide() {
//     hideAllSlides();
   
//     if (slidePosition === 0 ) {
//         slidePosition = totalSlides - 1;
//     } else {
//         slidePosition-- ;
//     }
//     slides[slidePosition].classList.add("carousel-item-visible");
//    }
   