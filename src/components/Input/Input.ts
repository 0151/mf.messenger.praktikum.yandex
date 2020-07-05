import { Component } from '../../modules/component.js'
import { validate } from '../../utils/validate.js'

interface IInputProps {
    type?: string
    value?: string
    name: string
    placeholder?: string
    errors?: string[]
    rules?: {
        [key: string]: string
    }
}

export class Input extends Component<IInputProps> {
    get value(): string {
        return this.props.value
    }

    handleFocusout(event: FocusEvent): void {
        const value = (<HTMLInputElement>event.target).value
        this.setProps({
            value
        })

        this.validate()
    }

    validate(): boolean {
        const errors = []

        for (const key in this.props.rules) {
            const message = this.props.rules[key]

            if (!validate.test(key, this.value)) {
                errors.push(message)
            }
        }

        this.setProps({
            errors
        })

        return !errors.length
    }

    componentDidMount(): void {
        this.node.addEventListener('focusout', this.handleFocusout.bind(this))
    }

    render(): string {
        return `
            <div class="input{{#if errors}} input_invalid{{/if}}">
                <input
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
    }
}