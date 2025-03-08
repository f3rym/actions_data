const { PacMan } = require('../src/game') // Импортируем игру

describe('PacMan', () => {
	let pacMan

	beforeEach(() => {
		pacMan = new PacMan()
	})

	test('should move left when ArrowLeft is pressed', () => {
		pacMan.move('ArrowLeft')
		expect(pacMan.x).toBeLessThan(250)
	})

	test('should move right when ArrowRight is pressed', () => {
		pacMan.move('ArrowRight')
		expect(pacMan.x).toBeGreaterThan(250)
	})

	test('should move up when ArrowUp is pressed', () => {
		pacMan.move('ArrowUp')
		expect(pacMan.y).toBeLessThan(250)
	})

	test('should move down when ArrowDown is pressed', () => {
		pacMan.move('ArrowDown')
		expect(pacMan.y).toBeGreaterThan(250)
	})
})
