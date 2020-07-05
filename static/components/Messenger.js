import Component from './Component.js'

export class Messenger extends Component {
    constructor(DOMNode, props, children) {
        super(DOMNode, props, children)

        this.state = {
            ...props
        }
    }

    template = `
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
                    <yp-component id="editor" class="message-editor"></yp-component>
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

export default Messenger