type callback = (...args: unknown[]) => unknown

export class EventBus {
    listeners: Record<string, callback[]> = {}

    on(event: string, callback: callback): void {
        if (undefined === this.listeners[event]) {
            this.listeners[event] = []
        }

        this.listeners[event].push(callback)
    }

    emit(event: string, ...args: unknown[]): void {
        if (undefined === this.listeners[event]) {
            throw new Error('')
        } else {
            this.listeners[event].forEach(callback => {
                callback(...args)
            })
        }
    }

    detach(event: string, callback: callback):void {
        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        )
    }
}