export function moveTowardsTo (destX, destY, srcX, srcY, speed) {
    // Rotate us to face the player
    const rotation = Math.atan2(destX - srcX, destY - srcY);

    // Move towards the player
    const velX = Math.cos(rotation) * speed;
    const velY = Math.sin(rotation) * speed;

    return {x: velX,y: velY}
}

export function lerp (value1, value2, amount) {
	amount = amount < 0 ? 0 : amount;
	amount = amount > 1 ? 1 : amount;
	return value1 + (value2 - value1) * amount;
}

export default {}