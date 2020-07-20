import { EventBus } from './eventBus'

const eventBus = new EventBus()
const callback = jest.fn()

describe('Шина событий', () => {
    test('событие добавляется и эмитится', () => {
        eventBus.on('buzz', callback)
        eventBus.emit('buzz')
        expect(callback).toHaveBeenCalled()
    })

    test('бросает ошибку при вызове несуществующего события', () => {
        expect(() => { eventBus.emit('foo') }).toThrow()
    })
})