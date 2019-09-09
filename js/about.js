  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  
  ready(() => { 
    anime({
        targets: '.hero-h2',
        translateX: "180%",
        duration:2000
      });

    
  });
  var dotatext = document.querySelector('.dota-text');
  console.log(dotatext)

  // Wrap every letter in a span
var textWrapper = document.querySelector('.dota-text');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='dota-text'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
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
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.about-text',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });