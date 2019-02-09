export default function ClickableObject(imageUrl, pos = {x : 0, y : 0}) {
    this.img = new Image();
    this.img.src = imageUrl;
    this.pos = pos;
    this.scale = 1;
}
ClickableObject.prototype.setPos = function(x,y){
    this.pos.x = x;
    this.pos.y = y;
}
ClickableObject.prototype.draw = function(context) {
    context.drawImage(this.img, this.pos.x, this.pos.y)
}
ClickableObject.prototype.clicked = function(clickPos){
    if(clickPos.x > this.pos.x && clickPos.x < this.pos.x + this.img.width){
        if(clickPos.y > this.pos.y && clickPos.y < this.pos.y + this.img.height){
            return true;
        }
    }
    return false;
}
ClickableObject.prototype.update = function(delta){
    if(this.clicked(window.GameManager.state.lastClicked)){
        window.GameManager.state.lastClicked = {x:0, y:0}
        this.hide();
    }
}
ClickableObject.prototype.hide = function(){
    this.img.src = '';
}