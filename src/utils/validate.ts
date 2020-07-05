type handler = (value: string, ...args:unknown[]) => boolean

class Validate {
    private _rules:  { [key: string]: handler } = {
        required: value => !!value.length,
        email: value => {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value.toLowerCase())
        },
        min: (value, length) => value.length >= length
    }

    public rule(key: string, handler: handler) {
        if (this._rules[key]) {
            throw new Error('')
        }
        this._rules[key] = handler
    }

    public test(rule: string, value: string) {
        const parts = rule.replace(/\s/g, '').split('(')
        const name = parts[0]
        const args = parts.length > 1 ? parts[1].slice(0, -1).split(',') : []

        if (typeof this._rules[name] !== 'function') {
            throw new Error()
        }

        return this._rules[name](value, ...args)
    }
}

export const validate = new Validate()