import { Component } from '../../modules/component'
import { Compose } from '../../components/Compose'
import { Avatar } from '../../components/Avatar'
import { ChatHeader } from '../../components/ChatHeader'
import { Chat } from '../../components/Chat'
import { ChatList } from '../../components/ChatList'
import { store } from '../../store'
import template from './Messenger.handlebars'

const chats = [
    {
        author: 'Анна Керн',
        avatar: './images/avatars/kern.jpg',
        date: '11.06.25',
        text: 'Вы уверяете, что я не знаю вашего характера. А какое мне до него дело? очень он мне нужен — разве у хорошеньких женщин должен быть характер?',
    },
    {
        author: 'Елизавета Хитрово',
        avatar: './images/avatars/hitrovo.jpg',
        date: '02.10.26',
        text: 'Не в вашем благородном характере оставлять меня без вестей о себе.',
    },
    {
        author: 'Наталья Гончарова',
        avatar: './images/avatars/goncharova.jpg',
        date: '10.12.36',
        text: 'Ну прощай. Целую тебя и ребят, будьте здоровы.',
    }

]

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
            chats,
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
                const title = prompt('Новый чат', '')
                console.log(title)
            } 
        })
    }

    render() {
        return template
    }
}