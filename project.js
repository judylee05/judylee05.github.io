document.addEventListener("DOMContentLoaded", increaseTextBox);

function increaseTextBox(){
    // increase the size of the message text box in portfolio.html
    textBox = document.getElementById('messageInput')

    // increase the height and width
    textBox.style.width="1000px";
}


// code below is for the carousel on the home page (index.html), which includes the plusSlides, currentSlide, and showSlides functions
// referenced Matthew Croak's code at https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9

// initialize myTimer and slideIndex
var slideIndex = 1;
var myTimer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
})


// control the next and previous slides and has it be set to move automatically at the given time interval
// reference: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9 and https://www.w3schools.com/jsref/met_win_clearinterval.asp
function plusSlides(n){
    clearInterval(myTimer);
    // if n is negative - go to previous slide
    // if n is positive - go to next slide
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    // set the next slide to be shown every 4 seconds
    if (n === -1){
        myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    } else {
        myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    }
}


// function to allow the user to click on a specific image in the carousel, without messing up the intervals
function currentSlide(n){
    //clears the interval so that there's no overlap if user clicks on the dot
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}


// function to show the current slide/image and to apply the css elements to this specific slide
// hides the previous slide
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    // if n becomes bigger than the total amount of slides, goes back to the 1st slide at slideIndex = 1 (so goes back to the beginning once carousel reaches the last slide)
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


increaseTextBox()