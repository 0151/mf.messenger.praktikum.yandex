import Component from './Component.js'

export class settingsForm extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.onsubmit = this.onsubmit.bind(this)
    }

    template = `
        <form id="form_${this._id}">
            <yp-component id="avatar" class="form__field"></yp-component>
            <yp-component id="name" class="form__field"></yp-component>
            <yp-component id="email" class="form__field"></yp-component>
            <yp-component id="password" class="form__field"></yp-component>
            <yp-component id="passwordNew" class="form__field"></yp-component>
            <yp-component id="passwordConfirm" class="form-field"></yp-component>
            <yp-component id="submit" class="form__button"></yp-component>
        </form>
    `

    didMount() {
        const form = document.getElementById(`form_${this._id}`)
        form.addEventListener('submit', this.onsubmit)
    }

    onsubmit = event => {
        event.preventDefault()

        const form = document.getElementById(`form_${this._id}`)
        let invalid = false

        this._children.forEach(childComponent => {
            if (typeof childComponent.validate === 'function' && !childComponent.validate()) {
                invalid = true
            }
        })

        if (!invalid) {
            const data = Object.fromEntries(new FormData(form))
            console.log(data)
        }
    }
}

export default settingsForm