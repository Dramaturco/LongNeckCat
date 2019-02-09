import GameLoop from './gameloop.js';
import Counter from './counter.js';
import ClickableObject from './clickable.js';
import './gamemanager.js';
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

canvas.addEventListener('click', (e) => {
    const offset = canvas.getBoundingClientRect()
    const clickpos = {x: e.clientX - offset.x, y: e.clientY - offset.y}
    window.GameManager.state.lastClicked = clickpos
    counter.increment();
})

