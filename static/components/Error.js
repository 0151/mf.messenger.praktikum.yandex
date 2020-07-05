import Component from './Component.js'

export class Error extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.state = {
            ...props
        }
    }

    template = `
        <div class="error">
            <div class="error__inner">
                <span class="error__code">{{code}}</span>
                <span class="error__message">
                    {{message}}
                </span>
                <div class="error__button">
                    <a class="button button_view_action" href="./messenger.html">Вернуться к списку чатов</a>
                </div>
            </div>
        </div>
    `
}

export default Error