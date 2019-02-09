export default function Cat() {}

Cat.prototype.pos = {
    x: 200,
    y: 500
}

Cat.prototype.update = function() {

}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
Cat.prototype.draw = function(ctx) {
    const img = new Image();
    img.src = 'Assets/cat.svg'
    ctx.drawImage(img, 0, 0);
}