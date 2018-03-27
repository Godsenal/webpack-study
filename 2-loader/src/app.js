import './app.scss';
import hello from './hello.js';
import everyone from './everyone.js';
import img from './githubpage.jpg';
import svg from './rocket.svg';

const createGreeting = () => {
    var el = document.createElement('div');
    el.innerText = hello + ' ' + everyone + '!';
    return el;
}

const createImg = () => {
    var el = document.createElement('img');
    el.src = img;
    el.width = 500;
    return el;
}

const createSvg = () => {
    var el = document.createElement('img');
    el.src = svg;

    return el;
}

console.log(svg);

document.body.appendChild(createGreeting());
document.body.appendChild(createImg());
document.body.appendChild(createSvg());
