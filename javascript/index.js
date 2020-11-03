let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide=(n)=>{
  showSlides(slideIndex = n);
}

function showSlides(n) {
 let i;
 const slides = document.getElementsByClassName("mySlides");
//  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
 
}

const h1=document.querySelector(".jumbotron-container:nth-child(1)");
const h2=document.querySelector(".jumbotron-container:nth-child(2)");
const h3=document.querySelector(".jumbotron-container:nth-child(3)");
// GSAP
var rule=CSSRulePlugin.getRule(".firstpage::after");

const tl= new TimelineMax();
gsap.to(".blanket",{height:0,duration:2,ease:"Power3.easeInOut"});
gsap.from(".social-icon", {opacity:0,duration:2,y: -100}, "someLabel+=2");
gsap.from(".jumbotron-container",{opacity:0, duration:1,stagger:2})
gsap.from(".jumbotron-container h1:nth-child(1)", {opacity:0,transform:"translateY(-50%)",duration:0.5,delay:1,ease:"easeInOut"});
gsap.from(".jumbotron-container h1:nth-child(2)", {opacity:0,transform:"translateY(-50%)",duration:0.5,delay:1.5,ease:"easeInOut"});
gsap.from(".jumbotron-container h1:nth-child(3)", {opacity:0,transform:"translateY(-50%)",duration:0.5,delay:2,ease:"easeInOut"});

// tl.to(".h-prvi",".h-drugi",".h-treci", {x: 100, duration: 1}, ">1");
// ease: SlowMo.ease.config(0.7,0.7, 0.7,0.7, false)

gsap.registerPlugin(ScrollTrigger);

gsap.from(".right-text h1", {
  scrollTrigger:{
    trigger:".right-text h1",
    toggleActions:"restart pause reverse pause"
  },
  x:100,
  duration:2
});

gsap.from(".right-text h3", {
  scrollTrigger:{
    trigger:".right-text h3",
    toggleActions:"restart pause reverse pause"
  },
  x:100,
  duration:2,
  delay:1
});
gsap.from(".left-second-container h1", {
  scrollTrigger:{
    trigger:".left-second-container h1",
    toggleActions:"restart pause reverse pause"
  },
  x:-100,
  duration:2
});


const navbar= document.querySelector(".navbar");
const sidebar= document.querySelector(".sidebar")

const openSidebar=()=>{

   sidebar.classList.value+=" active";
 
  console.log(sidebar.classList)
  
}

const closeSidebar=()=>{
 
    sidebar.classList.value="sidebar";
   

  }
