export default function GameLoop () {}

GameLoop.prototype.lastFrameTimeMs = 0
GameLoop.prototype.maxFPS = 0
GameLoop.prototype.delta = 0

GameLoop.prototype.routine = function (frameTimeMs) {
    // Limit the frame rate.    
    if (frameTimeMs < this.lastFrameTimeMs + (1000 / this.maxFPS)) {
        requestAnimationFrame(this.routine.bind(this))
        return
    }
    
    // Update frame relevant values
    this.delta = frameTimeMs - this.lastFrameTimeMs
    this.lastFrameTimeMs = frameTimeMs

    // update(delta)
    // draw()
    // sound()
    console.log(frameTimeMs)
    requestAnimationFrame(this.routine.bind(this))
}
