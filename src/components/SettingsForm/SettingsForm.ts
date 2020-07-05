import { Component } from '../../modules/component.js'
import { Input } from '../Input/Input.js'
import { Button } from '../Button/Button.js'
import { AvatarInput } from '../AvatarInput/AvatarInput.js'

const avatar = new AvatarInput({
    avatar: './images/avatars/pushkin.jpg'
})

const login = new Input({
    name: 'login',
    value: 'demo',
    placeholder: 'Введите логин'
})

const password = new Input({
    name: 'password',
    type: 'password',
    value: 'demo',
    placeholder: 'Введите пароль',
    rules: {
        required: 'Необходимо заполнить'
    }
})

const submit = new Button({
    text: 'Войти',
    view: 'action'
})

const register = new Button({
    text: 'Зарегистрироваться'
})


export class SettingsForm extends Component {
    constructor() {
        super({
            avatar,
            login,
            password,
            submit,
            register,
        })
    }

    render() {
        return `
            <form>
                <div class="form-field">
                    {{h avatar}}
                </div>
                <div class="form-field">
                    {{h login}}
                </div>
                <div class="form-field">
                    {{h password}}
                </div>
                <div class="form__button">
                    {{h submit}}
                </div>
                <div class="form__button">
                    {{h register}}
                </div>
            </form>
        `
    }
}