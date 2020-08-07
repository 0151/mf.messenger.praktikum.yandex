import { Component } from '../../modules/component'
import template from './ChatList.handlebars'
import { ChatsResponse } from '../../modules/api/models/chats'
import { store } from '../../store'

interface IChatListProps {
    chats: ChatsResponse[]
}

export class ChatList extends Component<IChatListProps> {
    componentDidMount() {
        store.subscribe(() => {
            this.setProps({
                chats: store.getState.chats
            })
        })
    }

    render() {
        return template
    }
}