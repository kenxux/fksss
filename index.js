/*slideshow js*/
var slides = document.getElementsByClassName("slideshow");
var currentSlide = 0;

function showSlide(n) {
if (n >= slides.length) {
currentSlide = 0;
} else if (n < 0) {
currentSlide = slides.length - 1;

}

for (var i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

slides[currentSlide].style.display = "block";

}

showSlide(currentSlide);
setInterval(function() {
  currentSlide++;
  showSlide(currentSlide);
  }, 5000);


      /* read more button js */
   function toggleText(textId){
    var text=document.getElementById(textId);
    if(text.style.display==="none"){
      text.style.display="block";
      text.innerHTML="...nga High School in Murang'a County.";
    }else{
      text.style.display="none";
      text.innerHTML="...";
    }
    }



    // JavaScript for handling the first "Read More" button
// JavaScript for handling the first "Read More" button
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1")
  
  
  if (
  dots.style.display === "none") 
  {
  dots.style.display = "inline";
  moreText.style.display = "none";
  btn.innerHTML = "Read more";
  } else {
  dots.style.display = "none";
  moreText.style.display = "inline";
  btn.innerHTML = "Read less";
  }
}
// JavaScript for handling the second "Read More" butt
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2")
  
  if (dots.style.display === "none") {
  dots.style.display = "inline";
  moreText.style.display = "none";
  btn.innerHTML = "Read more";
  } else {
  dots.style.display = "none";
  moreText.style.display = "inline";
  btn.innerHTML = "Read less";
  }
  }
  
// JavaScript for handling the third "Read More" button
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3")
  
  if (dots.style.display === "none") {
  dots.style.display = "inline";
  moreText.style.display = "none";
  btn.innerHTML = "Read more";
  } else {
  dots.style.display = "none";
  moreText.style.display = "inline";
  btn.innerHTML = "Read less";
  }
  }
  
// JavaScript for handling the fouth "Read More" button
function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4")
  
  if (dots.style.display === "none") {
  dots.style.display = "inline";
  moreText.style.display = "none";
  btn.innerHTML = "Read more";
  } else {
  dots.style.display = "none";
  moreText.style.display = "inline";
  btn.innerHTML = "Read less";
  }
  }
  // JavaScript for handling the fifth "Read More" button
  function myFunction5() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5")
    
    if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.innerHTML = "Read more";
    } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.innerHTML = "Read less";
    }
    }