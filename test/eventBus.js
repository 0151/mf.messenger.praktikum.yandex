import { EventBus } from '../src/modules/eventBus.ts'
const assert = require('assert')

describe('eventBus', function() {

    const ebus = new EventBus()
    let bar = false

    const foo = () => {
        bar = true
    }
    
    ebus.on('buzz', foo)

    describe('emit()', function () {
        it('должен вызвать коллбэк', function () {
            ebus.emit('buzz')
            assert.equal(bar, true)
        })
    })

    describe('detach()', function() {
        it('должен удалить коллбэк', function() {
            ebus.detach('buzz', foo)
            assert.equal(ebus.listeners.buzz.length, 0)
        })
    })
})


