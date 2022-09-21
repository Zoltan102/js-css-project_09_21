import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

function init(){
    document.getElementById('colourChanger').addEventListener('click', colourChange);
}

let colours = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'cyan',
    'purple',
];

function colourChange(){
    console.log('katt');
}
document.addEventListener('DOMContentLoaded', init);

console.log('Loaded');