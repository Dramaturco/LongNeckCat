import { moveTowardsTo, lerp } from './math.js'

export default function Debris(pos = this.pos , size = this.size, imgUrl = 'Assets/default-debris.svg') {
    this.pos = pos
    this.size = size
    this.sprite.src = imgUrl
}

Debris.prototype.sprite = new Image()

Debris.prototype.pos = {
    x: -350,
    y: -50
}

Debris.prototype.size = {
    w: 50,
    h: 0
}

Debris.prototype.update = function(delta) {
    const speed = 0.05 * delta

    if(!isNaN(speed)) {
        // const targetVelocity = moveTowardsTo(150, 300, this.pos.x, this.pos.y, 2)
        
        this.pos.x = lerp(this.pos.x, 250, 0.01)
        this.pos.y = lerp(this.pos.y, 400, 0.01)
    }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
Debris.prototype.draw = function(ctx) {
    ctx.drawImage(this.sprite, this.pos.x, this.pos.y);
}