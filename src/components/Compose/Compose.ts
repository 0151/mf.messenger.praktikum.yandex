import { Component } from '../../modules/component.js'
import { sanitize } from '../../utils/sanitize.js'

export class Compose extends Component<{}> {
    constructor(props) {
        super(props)
        this.send = this.send.bind(this)
    }

    get value() {
        return (<HTMLTextAreaElement>this.node).value
    }

    set value(value: string) {
        (<HTMLTextAreaElement>this.node).value = value
    }

    send(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            event.preventDefault()

            const value = sanitize(this.value)

            if (this.value) {
                this.value = null
                console.log(value)
            }
        }
    }

    componentDidMount() {
        this.node.addEventListener('keydown', this.send)
    }

    render() {
        return `
            <textarea
                id="compose"
                class="message-editor__textarea"
                rows="1"
                placeholder="Напишите сообщение..."
                autoComplete="false"
            ></textarea>
        `
    }
}