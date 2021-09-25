var header = document.querySelector('.header');


document.addEventListener('DOMContentLoaded', function () {    
  // const main = new Main();
  new MobileMenu();
  new ScrollObserver('.header', function(el, inview){
    if(inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  }, {once: false});
});
