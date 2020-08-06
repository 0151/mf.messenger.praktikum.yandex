import { Store, combineReducers } from './store'

describe('Стор', () => {

    test('работает подписка на изменения стора', () => {
        const cb = jest.fn()

        const auth = (state = false, action) => {
            switch (action.type) {
            case 'SIGNIN': return true
            case 'SIGNOUT': return false
            default: return state
            }
        }

        const rootReducer = combineReducers({
            auth
        })

        const store = new Store(rootReducer, {})

        store.subscribe(cb)

        store.dispatch({ type: 'TEST' })

        expect(cb).toBeCalled()
    })

})