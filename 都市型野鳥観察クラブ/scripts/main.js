var next = document.querySelector(".next-page");
var back = document.querySelector(".back-page");
var zukan1 = document.querySelector(".zukan1");
var zukan2 = document.querySelector(".zukan2");

next.addEventListener('click', function(){
  zukan1.classList.toggle('appear');
  zukan2.classList.toggle('appear');
});

back.addEventListener('click', function(){
  zukan1.classList.toggle('appear');
  zukan2.classList.toggle('appear');  
});

