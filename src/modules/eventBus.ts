export class EventBus {
  listeners = {}

  on(event, callback) {
    if (undefined === this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  emit(event, ...args) {
    if (undefined === this.listeners[event]) {
      throw new Error('')
    } else {
      this.listeners[event].forEach(callback => {
        callback(...args)
      })  
    }
  }

  detach(event, callback) {
    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    )
  }

}