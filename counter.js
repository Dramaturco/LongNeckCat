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
    context.fillText(this.toString(),this.displayPosX,this.displayPosY);
}