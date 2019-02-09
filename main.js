import GameLoop from './gameloop.js';
import Counter from './counter.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const counter = new Counter();
const loop = new GameLoop();

loop.que.push(counter)
loop.routine();

canvas.addEventListener('click', () => {
    counter.increment();
})