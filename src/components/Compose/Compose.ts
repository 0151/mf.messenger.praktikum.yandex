import { Component } from '../../modules/component'
import { sanitize } from '../../utils/sanitize'
import { store, dispatch } from '../../store'
import { pushMessage } from '../../actions'

export class Compose extends Component {
    constructor() {
        super()
        this.send = this.send.bind(this)
    }

    get value(): string {
        return (<HTMLTextAreaElement>this.node).value
    }

    set value(value: string) {
        (<HTMLTextAreaElement>this.node).value = value
    }

    send(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            event.preventDefault()

            const value = sanitize(this.value)

            if (this.value) {
                this.value = null
                
                dispatch(pushMessage({
                    text: value,
                    own: true
                }))
            }
        }
    }

    componentDidMount() {
        this.node.addEventListener('keydown', this.send)

        store.subscribe(() => {
            console.log(store.getState)
        })
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