
//dark theme button

const section =document.querySelectorAll('.sections')
console.log(section );
const tops=document.querySelector('.Notes');
console.log( tops);
let theme=document.querySelector('.theme');
theme.addEventListener('click',function( ){
    tops.classList.toggle('dark-theme');
    for(let i=0;i<section.length;i++){
    section[i].classList.toggle('dark-theme');
};
});
