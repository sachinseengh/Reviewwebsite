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

item1.addEventListener('click', function (e) {
    e.preventDefault( );

  section1.scrollIntoView({ behavior: 'smooth' });
});
item2.addEventListener('click', function (e) {
    e.preventDefault( );

  section2.scrollIntoView({ behavior: 'smooth' });
});
item3.addEventListener('click', function (e) {
    e.preventDefault( );

  section3.scrollIntoView({ behavior: 'smooth' });
});
item4.addEventListener('click', function (e) {
    e.preventDefault( );

  section4.scrollIntoView({ behavior: 'smooth' });
});
item5.addEventListener('click', function (e) {
    e.preventDefault( );

  section5.scrollIntoView({ behavior: 'smooth' });
});

