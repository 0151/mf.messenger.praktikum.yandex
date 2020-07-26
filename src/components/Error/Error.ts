import { Component } from '../../modules/component'
import { SafeString } from 'handlebars'

interface IErrorProps {
    code: string
    message?: string | SafeString
}

export class Error extends Component<IErrorProps> {
    render() {
        return `
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
}