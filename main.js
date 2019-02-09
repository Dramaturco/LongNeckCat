import GameLoop from './gameloop.js';
import Counter from './counter.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const counter = new Counter();
const loop = new GameLoop();
loop.routine();

for(let i=0; i<998; i++){
    counter.increment()
}

counter.draw(ctx);

window.debugButtonPressed = () =>{
    counter.increment();
    console.log(counter.toString())
}