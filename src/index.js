import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

function init(){
    document.getElementById('colourChanger').addEventListener('click', colourChange);
}

let colours = [
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'cyan',
    'purple',
];

let currentColour = 0;

function colourChange(){
    currentColour = currentColour + 1;
    if(currentColour >= colours.length){
        currentColour = 0;
    }
    document.body.style.backgroundColor = colours[currentColour];
}
document.addEventListener('DOMContentLoaded', init);

console.log('Loaded');