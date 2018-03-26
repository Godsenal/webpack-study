require ('./app.scss');
var hello = require('./hello.js')
var everyone = require('./everyone.js');
var img = require('./githubpage.jpg');

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

document.body.appendChild(createGreeting());
document.body.appendChild(createImg());

