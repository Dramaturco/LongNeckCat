import Counter from './counter.js';

const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const counter = new Counter();
for(let i=0; i<250; i++){
    counter.increment()
}
console.log('hello world');

ctx.font = "30px kittyfont";
ctx.fillText(counter.getCounter(),100,100);
console.log(counter.getCounter());