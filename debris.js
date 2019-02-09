export default function Debris(pos = this.pos , size = this.size, imgUrl = 'Assets/default-debris.svg') {
    this.pos = pos
    this.size = size
    this.sprite.src = imgUrl
}

Debris.prototype.sprite = new Image()

Debris.prototype.pos = {
    x: 50,
    y: 0
}

Debris.prototype.size = {
    w: 50,
    h: 0
}

Debris.prototype.update = function(delta) {
    const speed = 0.05 * delta

    if(!isNaN(speed)) {
        this.pos.x = this.pos.x + speed
    }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
Debris.prototype.draw = function(ctx) {
    ctx.drawImage(this.sprite, this.pos.x, this.pos.y);
}