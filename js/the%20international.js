

function checkForVisibility() {
  var f2p = document.querySelectorAll(".f2p");
  var trueSight = document.querySelectorAll(".trueSight");
  let slide = document.querySelectorAll(".ti-table");
  var tiHeader = document.querySelector(".ti-table-header");

  f2p.forEach(function(f2p) {
    if (isElementInViewport(f2p)) {
      f2p.classList.add("visible")
    }else {
      f2p.classList.remove("visible");
    }
  });
  trueSight.forEach(function(ts) {
    if (isElementInViewport(ts)) {
      ts.classList.add("visible")
    }else {
      ts.classList.remove("visible");
    }
  });

  //Table entry one by one
  slide.forEach(function(slide){
    
    if (isElementInViewport(slide)){
      if (slide.dataset.anime == 'true'){
        return;
      }
      else{ 
        tiHeader.classList.add("visible")
        anime({
          targets: '.ti-table tr',
          translateX: ([-800, 0]),
          easing: 'easeInOutSine',
          opacity: ([0,1]),
          delay: anime.stagger(100) // increase delay by 100ms for each elements.
        });
        slide.dataset.anime = 'true';
      }
    }
    else {
      slide.dataset.anime = 'false';
      tiHeader.classList.remove("visible")
    } ;
    
  });
}


function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -500 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 300 
  );
}

if (window.addEventListener) {
  addEventListener('scroll', checkForVisibility,false)
  addEventListener("load", welcome)
}

function welcome(){
  document.getElementById("welcome").play();

}






