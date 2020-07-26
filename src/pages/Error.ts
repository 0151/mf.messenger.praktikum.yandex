import Handlebars from 'handlebars'

import { Component } from '../modules/component'
import { Error as ErrorBlock } from '../components/Error/Error'
import { Header } from '../components/Header/Header'

export class Error extends Component {
    constructor() {
        super({
            header: new Header(),
            error: new ErrorBlock({
                code: '404',
                message: new Handlebars.SafeString('<strong>Страница не найдена.</strong> Вероятно, вы ошиблись в запросе.'),
            })
        })
    }

    render() {
        return `
            <div>
                {{h header}}
                {{h error}}
            </div>
        `
    }
}