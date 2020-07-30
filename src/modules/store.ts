interface Action {
    type: string
    payload?: unknown
}

const action: Action = {
    type: 'ADD_TODO',
    payload: { label: 'Съесть пиццу,', complete: false },
  };

export class Store {
    private state: Record<string, unknown>
  
    constructor() {
      this.state = {}
    }
  
    get value() {
      return this.state
    }
  
    dispatch(action: Action) {}
  
    subscribe() {}
  }

const sampleReducer = () => {
    
}

export const store = new Store()