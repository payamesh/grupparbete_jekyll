

function checkForVisibility() {
  var f2p = document.querySelectorAll(".f2p");
  let slide = document.querySelectorAll(".ti-table");
  


  //Table entry one by one
  slide.forEach(function(slide){
    
    if (isElementInViewport(slide)){
      if (slide.dataset.anime == 'true'){
        return;
      }
      else{ 
        anime({
          targets: '.ti-table',
          translateX: 270,
          delay: anime.stagger(100) // increase delay by 100ms for each elements.
        });
        slide.dataset.anime = 'true';
      }
    }
    else slide.dataset.anime = 'false' ;
  });
}


function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 
  );
}

if (window.addEventListener) {
  addEventListener('scroll', checkForVisibility,false)
  addEventListener("load", welcome)
}

function welcome(){
  document.getElementById("welcome").play();

}






