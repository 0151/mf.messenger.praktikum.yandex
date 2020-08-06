import { Component } from '../../modules/component'
import { store } from '../../store'
import template from './Chat.handlebars'
import './Chat.scss'

export class Chat extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.setProps({
                messages: store.getState.messages
            })
        })
    }

    render() {
        return template
    }
}