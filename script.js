'use strict';
// dark theme button

const section =document.querySelectorAll('.sections')
console.log(section );
const tops=document.querySelector('.Notes');
console.log( tops);
let theme=document.querySelector('.theme');
theme.addEventListener('click',function( ){
    tops.classList.toggle('dark-theme');
    if(theme.innerHTML=== "Dark Mode"){
      
        theme.innerHTML="Normal Mode";
    }else{
        theme.innerHTML="Dark Mode";
    };
    for(let i=0;i<section.length;i++){
    section[i].classList.toggle('dark-theme');

  
};

});


const nav=document.querySelector('.nav');

const handleHover = function (e, opacity) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = opacity;
      });
      logo.style.opacity = opacity;
    }
  };
  nav.addEventListener('mouseover', function (e) {
    handleHover(e, 0.5);
  });
  
  nav.addEventListener('mouseout', function (e) {
    handleHover(e, 1);
  });




  const section1 = document.querySelector('#section--1');
const section2= document.querySelector('#section--2');
const section3= document.querySelector('#section--3');
const section4= document.querySelector('#section--4');
const section5= document.querySelector('#section--5');


//nav link items

const item1=document.querySelector('.link-1');
const item2=document.querySelector('.link-2');
const item3=document.querySelector('.link-3');
const item4=document.querySelector('.link-4');
const item5=document.querySelector('.link-5');

  

// const btnScrollTo = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.one');

// console.log( btnScrollTo);

function smoothscroll(classname,destination){

  classname.addEventListener('click', function (e) {
    e.preventDefault( );

  destination.scrollIntoView({ behavior: 'smooth' });

});
}

smoothscroll(item1,section1);
smoothscroll(item2,section2);
smoothscroll(item3,section3);
smoothscroll(item4,section4);
smoothscroll(item5,section5);


//buttontoscrollup

const buttontoscroll=document.querySelector('.fixed');

window.addEventListener("scroll",  function( e){

  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        buttontoscroll.classList.remove('togglefixed');
  }else{
    buttontoscroll.classList.add('togglefixed');
  };
})
//scroll top button functionality

const scrolltopbutton=document.querySelector('.scroll-top');
scrolltopbutton.addEventListener('click',function(){

document.body.scrollTop  -=200;
document.documentElement.scrollTop -= 200;
});

scrolltopbutton.addEventListener("mousedown",function(){
  // document.body.scrollTop  =0;
  // document.documentElement.scrollTop = 0;
  nav.scrollIntoView({behavior:"smooth"})
});
const mediaQuery = window.matchMedia('(max-width: 600px)')

if (mediaQuery.matches) {
  scrolltopbutton.addEventListener("mousedown",function(){
    nav.scrollIntoView({behavior:"smooth"})
  });
}



