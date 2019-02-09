export default function Counter(){
    this.unit = "m";
    this.counter = 0;
}
Counter.prototype.pos = {
    x: 100,
    y: 100
}
Counter.prototype.setPos = function(x, y){
    this.pos.x = x;
    this.pos.y = y;
}
Counter.prototype.incrementUnit = function() {
    switch(this.unit){
        case "m":
            this.unit = "Km";
            break;
        case "Km":
            this.unit = "Mm";
            break;
    }
}
Counter.prototype.increment = function(incr = 1) {
    if(this.counter >= 999){
        this.counter = 1;
        this.incrementUnit();
    }
    else this.counter += incr;
}
Counter.prototype.toString = function() {
    return `${this.counter}${this.unit}`;
}
Counter.prototype.update = function() {

}
Counter.prototype.draw = function(context) {
    context.font = "30px kittyfont";
    context.fillText(this.toString(),this.pos.x,this.pos.y);
}