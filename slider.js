var carosoulSlider=document.querySelector(".slider_content");
var carosoulImg=document.querySelectorAll(".slider_content img");

var next=document.querySelector("#nxtbtn");
var previous=document.querySelector("#prbtn");

var counter=1;

var size=carosoulImg[0].clientWidth;

carosoulSlider.style.transform="translateX(" + (-size*counter) +"px)";

next.addEventListener("click",() =>{

if(counter>=carosoulImg.length-1) return;

carosoulSlider.style.transition="transform 0.4s ease-in-out";
counter++;
carosoulSlider.style.transform="translateX("+ (-size*counter) +"px)";


});

previous.addEventListener("click",() =>{
if(counter<=0) return;

carosoulSlider.style.transition=".4s ease-in-out";
carosoulSlider.style.transform="translateX("+ (-size*counter) +"px)";
counter--;

});

carosoulSlider.addEventListener("transitionend",() =>{

  if(carosoulImg[counter].id=="last_clone"){
    carosoulSlider.style.transition="none";
    counter=carosoulImg.length-5;
    carosoulSlider.style.transform="translateX("+ (-size*counter) +"px)";
  }


  if(carosoulImg[counter].id=="first_clone"){
    carosoulSlider.style.transition="none";
    counter=carosoulImg.length-1;
    carosoulSlider.style.transform="translateX("+ (-size*counter) +"px)";
  }








})
