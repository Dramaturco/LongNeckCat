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
const testObj = new ClickableObject('./Assets/iss.svg', {x: 200, y: 200})

const cat = new Cat();
const debris = new Debris();

loop.que.push(counter)
loop.que.push(cat)
loop.que.push(debris)
loop.que.push(testObj)

loop.routine();

canvas.addEventListener('click', (e) => {
    window._GameManager.state.lastClicked = {x: e.clientX, y: e.clientY}
    counter.increment();
})

