import { Component } from '../../modules/component'
import template from './ChatHeader.handlebars'
import { store } from '../../store'
import { current } from '../../reducers/chats'

interface IChatHeaderProps {
    title?: string,
    avatar?: string
}

export class ChatHeader extends Component<IChatHeaderProps> {
    componentDidMount() {
        store.subscribe(() => {
            const currentChatId = store.getState.current
            const currentChat = store.getState.chats.filter(chat => chat.id === currentChatId)[0]

            this.setProps(currentChat)
        })
    }

    render() {
        return template
    }
}