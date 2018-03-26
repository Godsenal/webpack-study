var hello = require('./hello.js')
var everyone = require('./everyone.js')

var el = document.createElement('div');
el.innerText = hello + ' ' + everyone + '!';
document.body.appendChild(el);
