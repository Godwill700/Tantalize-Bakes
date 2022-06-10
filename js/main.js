const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev-Btn");
const next = document.querySelector("#next-Btn");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};
const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for previous slide
  if (current.previousElementSibling) {
    // Add current to previous sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Add event listeners
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    // Run slide at interval time and reset the interval timer on click
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    // Run slide at interval time and reset the interval timer on click
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
//  Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

/**************Hamburger ***************/
const hamburgerToggler = document.querySelector(".toggler");
// const checked = true
// while (hamburgerToggler.checked = checked) {

// }
document.addEventListener("click", (e) => {
  (() => {
    if (hamburgerToggler.checked) {
      // document.addEventListener("click", (e) => {
      // setTimeout((e,3000))
      hamburgerToggler.checked = e.target === hamburgerToggler;

      console.log(e.target.classList);
    }
  })();
});

/**************Scroll to top ***************/

const backtoTop = document.querySelector(".to-top");
window.onload = (e) => {
  backtoTop.style.display = "none";
};
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset > 200) {
    backtoTop.style.display = "block";
  } else {
    backtoTop.style.display = "none";
  }
}
