
var carosoulSlide=document.querySelector(".carosoul_slide");
var carosoulImg=document.querySelectorAll(".carosoul_slide img");

//button
var prevbtn=document.querySelector("#previousbtn");
var nxtbtn=document.querySelector("#nxtbtn");

//counter
var counter= 1;
var size=carosoulImg[0].clientWidth;

carosoulSlide.style.transform="translateX(' + (-size*counter) +'px)";

//button listener

nxtbtn.addEventListener("click",() => {
  if(counter>=carosoulImg.length-1) return;
  carosoulSlide.style.transition='transform 0.4s ease-in-out';
  counter++;
  carosoulSlide.style.transform='translateX(' + (-size*counter) + 'px)';
});




//prev

prevbtn.addEventListener("click",() => {
  if(counter<=0) return;
  carosoulSlide.style.transition='transform 0.4s ease-in-out';
  counter--;
  carosoulSlide.style.transform='translateX(' + (-size*counter) + 'px)';
});



carosoulSlide.addEventListener('transitionend',() =>{

if(carosoulImg[counter].id==='last_clone'){
  carosoulSlide.style.transition="none";
  counter=carosoulImg.length - 5;
  carosoulSlide.style.transform='translateX(' + (-size * counter) + 'px)';

}

if(carosoulImg[counter].id==='first_clone'){
  carosoulSlide.style.transition="none";
  counter=carosoulImg.length - 2;
  carosoulSlide.style.transform='translateX(' + (-size * counter) + 'px)';

}

});
