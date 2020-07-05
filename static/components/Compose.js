import Component from './Component.js'
import sanitize from '../utils/sanitize.js'

export class Compose extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.state = {
            ...props
        }

        this.send = this.send.bind(this)
    }

    template = `
        <textarea
            id="compose"
            class="message-editor__textarea"
            rows="1"
            placeholder="Напишите сообщение..."
            autoComplete="false"
        ></textarea>
    `

    didMount() {
        const compose = document.getElementById('compose')

        compose.addEventListener('keydown', this.send)
    }

    send(event) {
        if (event.keyCode === 13) {
            event.preventDefault()

            const value = sanitize(event.target.value)

            if (value) {
                event.target.value = null
                console.log(value)
            }
        }
    }
}

export default Compose