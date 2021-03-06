  var ready = (callback) => {
      if (document.readyState != "loading") callback();
      else document.addEventListener("DOMContentLoaded", callback);
  }

  ready(() => {
      /*   anime({
          targets: '.hero-h2',
          translateX: "180%",
          duration: 2000
      });
 */

  });
  var dotatext = document.querySelector('.dota-text');


  // Blinkande text
  var textWrapper = document.querySelector('.dota-text');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='dota-text'>$&</span>");
  anime.timeline({
          loop: true
      })
      .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 900
      })
      .add({
          targets: '.ml11 .line',
          translateX: [0, document.querySelector('.dota-text').getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 900,
          delay: 100
      })
      .add({
          targets: '.dota-text',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 700,
          offset: '-=775',
          delay: (el, i) => 34 * (i + 1)
      }).add({
          targets: '.about-text',
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
      });

  
  //parallax

  function parallax() {
      var rocImg = document.querySelectorAll(".hero-image-wc3");
      var multiplier = 0.2;

      rocImg.forEach(function (header) {
          if (isElementInViewport(header)) {
              var distance = elementDistanceFromBottomOfViewport(header);
              header.style.transform = "translateY(-" + distance * multiplier + "px)";
              header.style.opacity = 0.8;
              anime.timeline({
                      loop: false
                  })
                  .add({
                      targets: ".hero-image-wc3",
                      duration: 400,
                      opacity: 1,
                      easing: 'linear',

                  });
                  
          } else {
              header.style.opacity = 0.1;

          }
      });
      var subHeaders = document.querySelectorAll(".subheader-div");

      subHeaders.forEach(function (header) {
          if (isElementInViewport(header)) {
              var distance = elementDistanceFromBottomOfViewport(header);
              header.style.transform = "translateY(-" + distance * multiplier + "px)";
              header.style.opacity = 1;
              anime.timeline({
                      loop: false
                  })
                  .add({
                      targets: subHeaders[header],
                      duration: 400,
                      opacity: 1,
                      translateY: 0,
                      easing: 'linear',

                  });

          }

      });



  }
  var alchPic = document.querySelector('.alch-diff');
  //bild animation
  function alchAnimate(){

    if (isElementInViewport(alchPic)) {
    
        if (alchPic.dataset.hasanimated == "false") {
            anime({
                targets: '.alch-diff',
                rotate: 360,
                duration: 800,
                easing: 'easeInCubic',
            })
            alchPic.dataset.hasanimated = "true";
            
        }

      }

  }


  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();

      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  if (window.addEventListener) {
      addEventListener('DOMContentLoaded', parallax, false);
      addEventListener('load', parallax, false);
      addEventListener('scroll', parallax, false);
      addEventListener('scroll', alchAnimate, false);
  }

  function elementDistanceFromBottomOfViewport(el) {
      var rect = el.getBoundingClientRect();

      return window.innerHeight - 500 - rect.top;
  }