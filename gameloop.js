export default function GameLoop () {}

GameLoop.prototype.lastFrameTimeMs = 0
GameLoop.prototype.maxFPS = 60
GameLoop.prototype.delta = 0
GameLoop.prototype.canvas = document.getElementById('screen')
GameLoop.prototype.ctx = document.getElementById('screen').getContext('2d')
GameLoop.prototype.que = []

GameLoop.prototype.routine = function (frameTimeMs) {
    // Limit the frame rate.    
    if (frameTimeMs < this.lastFrameTimeMs + (1000 / this.maxFPS)) {
        requestAnimationFrame(this.routine.bind(this))
        return
    }
    
    // Update frame relevant values
    this.delta = frameTimeMs - this.lastFrameTimeMs
    this.lastFrameTimeMs = frameTimeMs

    update(delta)
    draw()
    // sound()
    requestAnimationFrame(this.routine.bind(this))
}


GameLoop.prototype.routine = function (frameTimeMs) {
    // Limit the frame rate.    
    if (frameTimeMs < this.lastFrameTimeMs + (1000 / this.maxFPS)) {
        requestAnimationFrame(this.routine.bind(this))
        return
    }
    
    // Update frame relevant values
    this.delta = frameTimeMs - this.lastFrameTimeMs
    this.lastFrameTimeMs = frameTimeMs

    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

    for (let index = 0; index < this.que.length; index++) {
        this.que[index].update(this.delta)
        this.que[index].draw(this.ctx)
    }
    
    // sound()
    requestAnimationFrame(this.routine.bind(this))
}
