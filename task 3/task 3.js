let circle = document.querySelector('#circle0');
let circle1 = document.querySelector('#circle1');
let circle2 = document.querySelector('#circle2');
let circle3 = document.querySelector('#circle3');


function makeYellow(){
    circle1.style.background = ('black');
    circle2.style.background = ('yellow');
    circle3.style.background = ('black');
    circle.removeEventListener ('click',makeYellow);
    circle.addEventListener('click',makeRed);
}

function makeRed(){
    circle1.style.background = ('black');
    circle2.style.background = ('black');
    circle3.style.background = ('red');
    circle.removeEventListener ('click',makeRed);
    circle.addEventListener('click',makeGreen);
}

function makeGreen(){
    circle1.style.background = ('green');
    circle2.style.background = ('black');
    circle3.style.background = ('black');
    circle.removeEventListener ('click',makeGreen);
    circle.addEventListener('click',makeYellow);
}

circle.addEventListener('click',makeYellow);
circle.addEventListener('click',makeRed);
circle.addEventListener('click',makeGreen);

