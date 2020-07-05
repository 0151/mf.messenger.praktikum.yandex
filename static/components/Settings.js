import Component from './Component.js'

export class Settings extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.state = {
            ...props
        }
    }

    template = `
        <div class="settings">
            <div class="settings__inner">
                <h1 class="settings__title">
                    Ваш профиль
                </h1>
                <yp-component id="settingsForm"></yp-components>
            </div>
        </div>
    `
}

export default Settings