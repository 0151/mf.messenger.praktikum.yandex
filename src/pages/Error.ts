import { Component } from '../modules/component.js'
import { Error as ErrorBlock } from '../components/Error/Error.js'
import { Header } from '../components/Header/Header.js'

export class Error extends Component {
    constructor() {
        super({
            header: new Header({}),
            error: new ErrorBlock({
                code: '404',
                //@ts-ignore
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