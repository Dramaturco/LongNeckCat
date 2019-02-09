import GameLoop from './gameloop.js';
import Counter from './counter.js';
import ClickableObject from './clickable.js';
import './gamemanager.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const counter = new Counter();
const loop = new GameLoop();
const testObj = new ClickableObject('./Assets/iss.svg', {x: 200, y: 200})

loop.que.push(counter)
loop.que.push(testObj)
console.log(loop.que)
loop.routine();

canvas.addEventListener('click', (e) => {
    //window._GameManager.state.lastClick = {x: e.clientX, y: e.clientY}
    counter.increment();
})

