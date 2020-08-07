import { Component } from '../../modules/component'
import { Compose } from '../../components/Compose'
import { Avatar } from '../../components/Avatar'
import { ChatHeader } from '../../components/ChatHeader'
import { Chat } from '../../components/Chat'
import { ChatList } from '../../components/ChatList'
import { store, dispatch } from '../../store'
import template from './Messenger.handlebars'
import { chatsApi } from '../../modules/api'
import { loadChats } from '../../actions'

const compose = new Compose()

const chat = new Chat({
    messages: store.getState.messages
})

const header = new ChatHeader()

const list = new ChatList({
    chats: store.getState.chats
})

const ownAvatar = new Avatar({
    url: './images/avatars/pushkin.jpg',
    href: '/settings',
    size: 's'
})

export class Messenger extends Component {
    constructor() {
        super({
            chat,
            compose,
            ownAvatar,
            header,
            list
        })
    }

    componentDidMount() {
        this.node.addEventListener('click', event => {
            const target = event.target as HTMLElement

            if (target.matches('.create-chat-button')) {
                const title: string = prompt('Новый чат', '')
                if (title) {
                    chatsApi
                        .createChat({ title })
                        .then(() => {
                            dispatch(loadChats())
                        })
                        .catch(error => {
                            console.error(error)
                        })
                }
            } 
        })
    }

    render() {
        return template
    }
}