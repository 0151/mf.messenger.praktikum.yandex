import { Component } from '../modules/component.js'
import { Compose } from '../components/Compose/Compose.js'

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

const current = {
    author: 'Анна Керн',
    messages: [
        {
            text: 'Я никогда не забуду того восторга, который охватил мою душу. Я была в упоении как от текучих стихов этой чудной поэмы, так и от его чтения, в котором было столько музыкальности, что я истаивала от наслаждения',
            date: '2.06.1825',
        },
        {
            text: 'Вы уверяете, что я не знаю вашего характера. А какое мне до него дело? очень он мне нужен — разве у хорошеньких женщин должен быть характер? главное — это глаза, зубы, ручки и ножки — (я прибавил бы еще — сердце, — но ваша кузина очень уж затаскала это слово)',
            date: '11.06.1825',
            own: true
        }
    ]
}

export class Messenger extends Component {
    constructor() {
        const compose = new Compose({})

        super({
            chats,
            current,
            compose
        })
    }

    render() {
        return `
            <div class="messenger-layout">
                <div class="messenger-sidebar">
                    <div class="chat-list-header">
                        <a class="avatar avatar_size_s" href="settings.html">
                            <img class="avatar__image" src="./images/avatars/pushkin.jpg" />
                        </a>
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
                    {{#with current}}
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
                        <div class="chat">
                            {{#each messages}}
                                <div class="message{{#if own}} message_own{{/if}}">
                                    <div class="message__balloon">
                                        <div class="message__content">{{text}}</div>
                                        <div class="message__info">
                                            <div class="message__date">{{date}}</div>
                                        </div>
                                    </div>
                                </div>
                            {{/each}}
                        </div>
                    {{/with}}
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