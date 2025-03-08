// src/game.js

class PacMan {
	constructor() {
		this.x = 50
		this.y = 50
		this.direction = 'right'
	}

	move() {
		switch (this.direction) {
			case 'right':
				this.x += 5
				break
			case 'left':
				this.x -= 5
				break
			case 'up':
				this.y -= 5
				break
			case 'down':
				this.y += 5
				break
		}
	}

	changeDirection(newDirection) {
		this.direction = newDirection
	}
}

module.exports = { PacMan }
