import Component from './Component.js'

export class AuthWrapper extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.state = {
            ...props
        }
    }

    template = `
        <div class="wrapper">
            <div class="modal">
                <div class="modal__header">
                    <img class="logo logo_size_s" src="./images/logo.svg" />
                </div>
                <div class="modal__content">
                    <span class="form-title">{{title}}</span>
                    <yp-component id="authForm"></yp-component>
                </div>
            </div>
        </div>
    `
}

export default AuthWrapper