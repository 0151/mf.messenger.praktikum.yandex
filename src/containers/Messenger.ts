import { Component } from '../modules/component'
import { Compose } from '../components/Compose'
import { Avatar } from '../components/Avatar'
import { Chat } from '../components/Chat'
import { store } from '../store'

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
        })
    }

    render() {
        return `
            <div class="messenger-layout">
                <div class="messenger-sidebar">
                    <div class="chat-list-header">
                        {{h ownAvatar}}
                        <button class="menu-button button button_view_plain">
                            <svg class="menu-button__icon">
                                <use xlink:href="#icon-menu">
                            </svg> 
                        </button>
                    </div>
                    <div class="search">
                        <input class="search__input" type="text" placeholder="Поиск">
                    </div>
                    <ul class="chat-list">
                        {{#each chats}}
                            <li class="chat-entity chat-list-item" tabindex="0">
                                <div class="chat-entity__prepend">
                                    <div class="avatar avatar_size_m">
                                        <img class="avatar__image" src="{{avatar}}">
                                    </div>
                                </div>
                                <div class="chat-entity__body">
                                    <div class="chat-entity__horizontal-layout">
                                        <div class="chat-entity__header">{{author}}</div>
                                        <div class="chat-entity__date">{{date}}</div>
                                    </div>
                                    <div class="chat-entity__text">{{text}}</div>
                                </div>
                            </li>
                        {{/each}}
                    </ul>
                </div>
                <div class="messenger-main">
                    <div class="chat-entity chat-header">
                        <div class="chat-entity__prepend">
                            <div class="avatar avatar_size_s">
                                <img class="avatar__image" src="./images/avatars/kern.jpg">
                            </div>
                        </div>
                        <div class="chat-entity__body">
                            <div class="chat-entity__horizontal-layout">
                                <div class="chat-entity__header">{{author}}</div>
                            </div>
                            <div class="chat-entity__text">Данные контакта</div>
                        </div>
                    </div>
                    {{h chat}}
                    <div class="compose">
                        <button class="compose-button button button_view_plain">
                            <svg class="compose-button__icon">
                                <use xlink:href="#icon-attach">
                            </svg> 
                        </button>
                        <div class="message-editor">
                            {{h compose}}
                        </div>
                        <button class="compose-button button button_view_plain">
                            <svg class="compose-button__icon">
                                <use xlink:href="#icon-smile">
                            </svg> 
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}