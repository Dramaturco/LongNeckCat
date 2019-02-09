export default function Debris(pos = this.pos , size = this.size, imgUrl = 'Assets/debris-default.svg') {
    this.pos = pos
    this.size = size
    this.sprite.src = imgUrl
}

Debris.prototype.sprite = new Image()

Debris.prototype.pos = {
    x: 0,
    y: 0
}

Debris.prototype.size = {
    w: 0,
    h: 0
}

Debris.prototype.update = function() {

}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
Debris.prototype.draw = function(ctx) {
    const img = new Image();
    img.src = 'Assets/cat.svg';
    ctx.drawImage(img, 0, 0);
}