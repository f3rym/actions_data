// tests/game.test.js

const { PacMan } = require('../src/game')

describe('PacMan', () => {
	let pacMan

	beforeEach(() => {
		pacMan = new PacMan() // создаем новый объект PacMan перед каждым тестом
	})

	it('should initialize PacMan with correct position and direction', () => {
		expect(pacMan.x).toBe(50)
		expect(pacMan.y).toBe(50)
		expect(pacMan.direction).toBe('right')
	})

	it('should move PacMan to the right', () => {
		pacMan.move()
		expect(pacMan.x).toBe(55) // PacMan должен двигаться на 5 единиц вправо
		expect(pacMan.y).toBe(50)
	})

	it('should change direction and move accordingly', () => {
		pacMan.changeDirection('down')
		pacMan.move()
		expect(pacMan.x).toBe(50)
		expect(pacMan.y).toBe(55) // Теперь PacMan должен двигаться вниз
	})
})
