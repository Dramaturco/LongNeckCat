export default function Cat() {}

Cat.prototype.pos = {
    x: 170,
    y: 320
}

Cat.prototype.update = function() {

}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
Cat.prototype.draw = function(ctx) {
    const img = new Image();
    img.src = 'Assets/cat.svg'
    ctx.drawImage(img, this.pos.x, this.pos.y);
}