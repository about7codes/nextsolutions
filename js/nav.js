// Desktop nav Animation below ********************************************************

const navLink = document.getElementsByClassName("nav-link");
const linkSub = document.getElementsByClassName("link-sub");


function disAdder(i){
    linkSub[i].classList.add('animated');
    linkSub[i].classList.toggle('disp');
}

for (let i = 0 ; i < navLink.length; i++) {

    navLink[i].addEventListener('mouseover' , ()=> disAdder(i) ); 
    navLink[i].addEventListener('mouseout' , ()=> disAdder(i) ); 
}


// Mobile nav below ****************************************************

const navOpen = document.getElementById('nav-open');
const navMob = document.getElementById('nav-mob');
const navClose = document.getElementById('nav-close');


function navOp(){
    navMob.classList.toggle('disp');
}

navOpen.addEventListener('click', navOp);
navClose.addEventListener('click', navOp);


// Mobile link dropdown below ****************************************************

const mobLink = document.getElementsByClassName('mob-link-a');
const mobSub = document.getElementsByClassName('mob-sub');


function mobSubDrop(i){
    mobSub[i].classList.toggle('disp');
}

for (let i = 0 ; i < mobLink.length; i++) {
    mobLink[i].addEventListener('click' , ()=> mobSubDrop(i) ); 
}
