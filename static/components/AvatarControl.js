import Component from './Component.js'

export class AvatarControl extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.state = {
            ...props
        }
    }

    template = `
        <div class="avatar avatar_size_xl settings-avatar" id="control_${this._id}">
            <img class="avatar__image" src="{{avatar}}" />
        </div>

        <input id="input_${this._id}" class="visually-hidden" type="file" name="{{name}}"/>
    `

    didMount() {
        const self = this
        const control = document.getElementById(`control_${this._id}`)
        const input = document.getElementById(`input_${this._id}`)

        control.addEventListener('click', () => {
            input.click()
        })

        input.addEventListener('change', function () {
            self.setState({
                value: this.value
            })
        })
    }
}

export default AvatarControl