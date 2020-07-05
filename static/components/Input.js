import Component from './Component.js'

export class Input extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.state = {
            value: '',
            ...props
        }

        this.onblur = this.onblur.bind(this)
    }

    template = `
        <div class="input{{#if errors}} input_invalid{{/if}}">
            <input
                id="input_${this._id}"
                class="input__control"
                
                type="{{#if type}}{{type}}{{else}}text{{/if}}"
                value="{{value}}"
                name="{{name}}"
                placeholder="{{placeholder}}"
            />
            {{#each errors}}
                <span class="input__error">{{this}}<span>
            {{/each}}
        </div>
    `

    didMount() {
        const input = document.getElementById(`input_${this._id}`)

        input.addEventListener('focus', () => {
            input.parentNode.classList.remove('input_invalid')
            input.parentNode.querySelectorAll('.input__error').forEach(error => {
                error.remove()
            })
        })

        input.addEventListener('blur', this.onblur)
    }

    onblur(event) {
        const value = event.target.value

        this.setState({
            value
        })

        this.validate()
    }

    get name() {
        return this.state.name
    }

    get value() {
        return this.state.value
    }

    validate() {
        const errors = []

        for (const key in this.state.rules) {
            const message = this.state.rules[key]

            if (!validate.test(key, this.value)) {
                errors.push(message)
            }
        }

        this.setState({
            errors
        })

        return !errors.length
    }
}

export default Input