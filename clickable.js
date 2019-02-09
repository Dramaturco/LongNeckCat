export default function ClickableObject(imageUrl, pos = {x : 0, y : 0}) {
    this.img = new Image();
    this.img.src = imageUrl;
    this.pos = pos;
}
ClickableObject.prototype.pos = {
    x: 0,
    y: 0
}
ClickableObject.prototype.setPos = function(x,y){
    this.pos.x = x;
    this.pos.y = y;
}
ClickableObject.prototype.draw = function(context) {
    context.drawImage(this.img, this.posX, this.posY);
}
ClickableObject.prototype.clicked = function(clicked){
    if(clicked.x > this.pos.x && clicked.x < this.pos.x + this.img.width){
        if(clicked.y > this.pos.y && clicked.y < this.pos.y + this.img.height){
            return true;
        }
    }
    return false;
}
ClickableObject.prototype.update = function(){
    if(clicked(window.GameManager.state.lastClick)){
        console.log('you hit me');
    }
}