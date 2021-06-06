const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slider = document.querySelector (".slider")

let sliderIndex = 0;

right.addEventListener("click", function(){
   sliderIndex = (sliderIndex < 3) ? sliderIndex + 1 : 3;
    slider.style.transform = "translate("+ (sliderIndex) * -25 + "%)";
 });


 left.addEventListener("click", function(){
   sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0;

    slider.style.transform = "translate("+ (sliderIndex) * -25 + "%)";

 });

