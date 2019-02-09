export default function Counter(){
    this.unit = "m";
    this.counter = 0;
    this.displayPosX = 100;
    this.displayPosY = 100;
}
Counter.prototype.setPos = function(x, y){
    this.displayPosX = x;
    this.displayPosY = y;
}
Counter.prototype.increment = function() {
    //TODO: check if we're at 999 and increment the unit
    this.counter++;
}
Counter.prototype.toString = function() {
    return `${this.counter}${this.unit}`;
}
Counter.prototype.draw = function(context) {
    context.font = "30px kittyfont";
    context.fillText(this.toString(),this.displayPosX,this.displayPosY);
}