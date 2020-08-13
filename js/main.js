const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");


//Buttons
const prevBtn = document.querySelector("#pBtn");
const nextBtn = document.querySelector("#nBtn");


// counter
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//button Listeners

nextBtn.addEventListener("click", () => {

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter)

});

prevBtn.addEventListener("click", () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter)
});


//slide loop

carouselSlide.addEventListener("transitionend", () => {
    console.log(carouselImages[counter].id)
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    };
    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter; //-5 normal
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        console.log(carouselImages.length)
    }
});

//change image

carouselSlide.addEventListener("mouseover", () => {
    carouselSlide.style.transition = "none"

})