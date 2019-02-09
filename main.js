import GameLoop from './gameloop.js';
import Counter from './counter.js';
import Cat from './cat.js';
import Debris from './debris.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const counter = new Counter();
const loop = new GameLoop();

const cat = new Cat();
const debris = new Debris();

loop.que.push(counter)
loop.que.push(cat)
loop.que.push(debris)

loop.routine();

canvas.addEventListener('click', () => {
    counter.increment();
})