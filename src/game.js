class PacMan {
	constructor() {
		this.x = 250
		this.y = 250
		this.radius = 20
		this.color = 'yellow'
		this.speed = 5
		this.dx = 0
		this.dy = 0
	}

	move(direction) {
		if (direction === 'ArrowLeft') this.x -= this.speed
		if (direction === 'ArrowRight') this.x += this.speed
		if (direction === 'ArrowUp') this.y -= this.speed
		if (direction === 'ArrowDown') this.y += this.speed
	}

	draw(ctx) {
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
		ctx.fillStyle = this.color
		ctx.fill()
		ctx.closePath()
	}
}

const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

const pacMan = new PacMan()

document.addEventListener('keydown', e => {
	pacMan.move(e.key)
})

function updateGame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	pacMan.draw(ctx)
	requestAnimationFrame(updateGame)
}

updateGame()

module.exports = { PacMan } // Экспортируем класс для тестов
