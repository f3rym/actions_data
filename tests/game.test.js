// tests/game.test.js

const { PacMan } = require('../src/game') // ваш основной модуль игры

describe('PacMan', () => {
	let pacMan

	beforeAll(() => {
		// Мокаем элемент canvas
		document.body.innerHTML = `
      <canvas id="gameCanvas"></canvas>
    `
		const canvas = document.getElementById('gameCanvas')
		canvas.getContext = jest.fn().mockReturnValue({
			clearRect: jest.fn(),
			fillRect: jest.fn(),
			// добавьте другие методы, которые вам нужны для тестов
		})
	})

	it('should create a new PacMan object', () => {
		pacMan = new PacMan()
		expect(pacMan).toBeDefined()
	})

	// добавьте остальные тесты
})
