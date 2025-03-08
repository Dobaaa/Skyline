document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: { slidesPerView: 4 },
      768: { slidesPerView: 2 },
      576: { slidesPerView: 1 },
    },
  });
  var swiper2 = new Swiper(".myCustomSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  });
});

/* -------------range function-------------------------------*/
const slider = document.getElementById("electricBill");
const output = document.getElementById("sliderValue");

slider.oninput = function () {
  output.innerText = `$${this.value}`;
};

function updateSliderBg() {
  let val = slider.value;
  let min = slider.min;
  let max = slider.max;
  let percentage = ((val - min) / (max - min)) * 100;
  slider.style.background = `linear-gradient(to right, #f9b061 ${percentage}%, #c55402 ${percentage}%)`;
}

slider.addEventListener("input", updateSliderBg);
updateSliderBg(); // لضبط الخلفية عند التحميل
