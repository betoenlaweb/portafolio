
//////// JQUERY NAV-BAR///////////////

const nav = window.matchMedia('(-webkit-min-device-pixel-ratio:0) and (min-width: 1024px)')

function fullScreen(n) {
  
  if(n.matches) {
      $('#openNav').on('click', function(nav) {    
      document.getElementById("myNav").style.height = "100%";
    });
  }else {
    $('#openNav').on('click', function(nav) {    
      document.getElementById("myNav").style.height = "15%";
    });
  }
}

nav.addListener(fullScreen)
fullScreen(nav)

$('#closeNav').on('click', function() {
  document.getElementById("myNav").style.height = "0%";
});

$('.overlay-content').on('click', function() {
  document.getElementById("myNav").style.height = "0%";
});

//////////LOGO-GIF//////////////////////








///////////JAVA SCRIPT MODAL/////////////


let blurIn = document.querySelectorAll(".modal-open");
let blur = document.querySelectorAll(".modal-area"); 
let blurOut = document.querySelectorAll(".modal-close");



for(let i = 0; i < blurIn.length; i++) {
  
  blurIn[i].onclick = function() {
    for(let i =0; i< blur.length; i++) {
      blur[i].style.cssText = "opacity: 1; transition: 0.4s; transition-delay: 0.8s";
    }
  };
 
}


for(let i = 0; i < blurOut.length; i++) {
  
  blurOut[i].onclick = function() {
    for(let i =0; i< blur.length; i++) {
      blur[i].style.cssText = "opacity: 0; transition: 0.4s; transition-delay: 0.8s";
    }
  };
 
}
   




