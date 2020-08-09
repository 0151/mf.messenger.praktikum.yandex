import { EventBus } from './eventBus'

const eventBus = new EventBus()

describe('Шина событий', () => {
    test('событие добавляется и эмитится', () => {
        const callback = jest.fn()

        eventBus.on('buzz', callback)
        eventBus.emit('buzz')
        expect(callback).toHaveBeenCalled()
    })

    test('бросает исключение при вызове несуществующего события', () => {
        expect(() => { eventBus.emit('foo') }).toThrow()
    })
})