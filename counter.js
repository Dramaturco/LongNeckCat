export default function Counter(){
    this.unit = "m";
    this.counter = 0;
}

Counter.prototype.increment = function() {
    //TODO: check if we're at 999 and increment the unit
    this.counter++;
}
Counter.prototype.getCounter = function() {
    return `${this.counter}${this.unit}`;
}
