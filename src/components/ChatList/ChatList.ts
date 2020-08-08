import { Component } from '../../modules/component'
import template from './ChatList.handlebars'
import { ChatsResponse } from '../../modules/api/models/chats'
import { store, dispatch } from '../../store'
import { selectChat } from '../../actions'
import './ChatList.scss'

interface IChatListProps {
    chats: ChatsResponse[]
}

export class ChatList extends Component<IChatListProps> {
    handleClick(event: Event): void {
        const target = event.target as HTMLElement
        
        if (target.matches('.chat-list-item')) {
            const currentChatId = Number(target.dataset.id)

            dispatch(selectChat(currentChatId))
        }
    }

    componentDidMount() {
        this.node.addEventListener('click', this.handleClick)

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