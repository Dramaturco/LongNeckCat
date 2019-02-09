import GameLoop from './gameloop.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

console.log('hello world');

ctx.beginPath();
ctx.moveTo(11.5, 0);
ctx.lineTo(11.5, 11);
ctx.stroke();

const loop = new GameLoop();
loop.routine();