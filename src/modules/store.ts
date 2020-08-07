

export interface Action {
    type: string
}

export interface AnyAction extends Action {
    [key: string]: any
}

export interface ActionCreator<A, P extends any[] = any[]> {
    (...args: P): A
}

export type Reducer<T = any, A extends Action = AnyAction> = (state: T, action: A) => T

export class Store<T, A extends Action = AnyAction> {
    private _currentReducer: Reducer<T>
    private _currentState: T
    private _currentListeners: (() => void)[]

    constructor(reducer: Reducer<T>, preloadedState: T) {
        this._currentReducer = reducer
        this._currentState = preloadedState
        this._currentListeners = []

        this.subscribe = this.subscribe.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }

    get getState(): T {
        return this._currentState
    }

    subscribe(listener: () => void): void {
        this._currentListeners.push(listener)

        //TODO: вернуть unsubscribe
    }

    dispatch(action: A | ((...args: unknown[]) => void)): void {

        if (typeof action === 'function') {
            return action(this.dispatch)
        }

        this._currentState = this._currentReducer(this._currentState, action)

        this._currentListeners.forEach(listener => listener())
    }
}

export const combineReducers = (reducers: Record<string, Reducer>) => {

    return function(state: Record<string, unknown>, action: AnyAction): Record<string, any> {
        const nextState: Record<string, unknown> = {}

        for (const key in reducers) {
            const reducer = reducers[key]
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)

            nextState[key] = nextStateForKey
        }

        return nextState
    }
}