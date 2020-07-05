export class Validate {
    _rules = {
        required: value => !!value.length,
        email: value => {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value.toLowerCase())
        },
        min: (value, length) => value.length >= length
    }

    rule(key, handle) {
        this._rules[key] = handle
    }

    test(rule, value) {
        const parts = rule.replace(/\s/g, '').split('(')
        const name = parts[0]
        const args = parts.length > 1 ? parts[1].slice(0, -1).split(',') : []

        if (typeof this._rules[name] !== 'function') {
            throw new Error()
        }

        return this._rules[name](value, ...args)
    }
}

export default Validate