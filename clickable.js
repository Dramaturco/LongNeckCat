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
    console.log("draw")
    //this gets called but no image appears
    context.drawImage(this.img, this.posX, this.posY);
}
ClickableObject.prototype.clicked = function(clickPos){
    if(clickPos.x > this.pos.x && clickPos.x < this.pos.x + this.img.width){
        if(clickPos.y > this.pos.y && clickPos.y < this.pos.y + this.img.height){
            return true;
        }
    }
    return false;
}
ClickableObject.prototype.update = function(){
    if(this.clicked(window.GameManager.state.lastClicked)){
        //TODO: actually delete this object
        console.log('you hit me');
    }
}