export function moveTowardsTo (destX, destY, srcX, srcY) {
    const dx = destX - srcX;
    const dy = destY - srcY;

    const angle = Math.atan(dy, dx);

    const magnitude = 1.0;
    const velX = Math.cos(angle) * magnitude;
    const velY = Math.sin(angle) * magnitude;

    return {x: velX,y: velY}
}

export default {}