interface IAction {
    type: string
    payload?: Record<string, unknown>
}

type State = unknown

type Reducer = (state: State, action: IAction) => void

export class Store {
    private _currentReducer: Reducer
    private _currentState: State
    private _currentListeners: (() => void)[]

    constructor(reducer: Reducer, preloadedState = {}) {
        this._currentReducer = reducer
        this._currentState = preloadedState
        this._currentListeners = []
    }

    get getState(): State {
        return this._currentState
    }

    subscribe(listener: () => void): void {
        this._currentListeners.push(listener)
    }

    dispatch(action: IAction): void {
        this._currentState = this._currentReducer(this._currentState, action)

        this._currentListeners.forEach(listener => listener())
    }
}

export const combineReducers = (reducers: Record<string, Reducer>) => {

    return function(state = {}, action: IAction): State {
        const nextState = {}

        for (const key in reducers) {
            const reducer = reducers[key]
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)

            nextState[key] = nextStateForKey
        }

        return nextState
    }
}