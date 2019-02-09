import GameLoop from './gameloop.js';
import Counter from './counter.js';
import ClickableObject from './clickable.js';
import './gamemanager.js';
import Cat from './cat.js';
import Debris from './debris.js';

const RANDOM_IMAGES = ['./Assets/default-debris.svg', './Assets/iss.svg', 'Assets/Flying_Spaghetti_Monster.svg']

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const counter = new Counter();
const loop = new GameLoop();
const testObj = new ClickableObject('./Assets/default-debris.svg', {x: 20, y: 20});
const cat = new Cat();

loop.que.push(counter)
loop.que.push(cat)
loop.que.push(testObj)

const a = setInterval(function(){ 
    console.log('add1')
    loop.que.push(new ClickableObject(RANDOM_IMAGES[Math.floor((Math.random() * (RANDOM_IMAGES.length)))], {x: (Math.random() * 500) + 1, y: 1}))
}, 500);

loop.routine();

canvas.addEventListener('click', (e) => {
    const offset = canvas.getBoundingClientRect()
    const clickpos = {x: e.clientX - offset.x, y: e.clientY - offset.y}
    window.GameManager.state.lastClicked = clickpos
    window.GameManager.state.incrementer = counter.increment.bind(counter);
    counter.increment();
})

